import { Injectable } from '@angular/core';

/*
  Generated class for the HkqrProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HkqrProvider {
  // Assign EMV template id 
  EmvTemplateId = [[2, 51], [65, 79], [80, 99]];
  data = {};

  constructor() {
    console.log('Hello HkqrProvider Provider');
  }

  genQRvalue(val) {
    var data = Object.assign({}, val);
    //combine EMV QR template
    for (var j = 0; j < this.EmvTemplateId.length; j++)
      for (var i = this.EmvTemplateId[j][0]; i <= this.EmvTemplateId[j][1]; i++)
        if (data[i] != null)
          data[i.toString()] = this.combineQRvalue(data[i.toString()]);

    var str = this.combineQRvalue(data);
    str += "6304" + this.crc16(str + "6304");
    return str;
  }

  combineQRvalue(data) {
    var l = 0;
    var str = "";
    for (var id in data) {
      if (Number(id) < 10) str += 0;
      str += id;
      l = data[id].length;
      if (l < 10) str += 0;
      str += l;
      str += data[id];
    }
    return str;
  }

  parseEMVQR(qr) {
    //crc checksum
    if (this.crc16(qr.slice(0, -4)) != qr.slice(-4)) return false;
    //check payload format indicator to determine whether it is EMV QRcode
    if (qr.slice(0, 6) != "000201") return false;

    //Parse EMV QR code root data
    this.data = this.parseData(qr);

    //Parse EMV QR code template
    for (var id = 0; id < this.EmvTemplateId.length; id++) {
      for (var i = this.EmvTemplateId[id][0]; i <= this.EmvTemplateId[id][1]; i++) {
        if (typeof this.data[i] !== "undefined") {
          var str = this.parseData(this.data[i]);
          if (!str) {
            console.log("ID or length invalid");
            return false;
          }
          this.data[i] = str;
        }
      }
    }
    return this.data;
  }

  parseData(qr) {
    var data = {};
    var id, size, i = 0;

    while (i < qr.length) {
      // get ID 
      id = (qr.slice(i, i += 2));
      // Check id duplication and isNumber ?
      if (Object.keys(data).indexOf(id) != -1) return false;
      id = Number(id);
      if (isNaN(id)) return false;
      // check size isNumber?
      size = Number(qr.slice(i, i += 2));
      if (isNaN(size)) return false;
      // get data
      data[id] = qr.slice(i, i += size);

    }
    return data;
  }

  // Checksum
  crc16(data) {
    var crc = 0xFFFF;
    for (var c = 0; c < data.length; c++) {
      crc ^= data.charCodeAt(c) << 8;
      for (var i = 0; i < 8; i++) {
        if (crc & 0x8000)
          crc = (crc << 1) ^ 0x1021;
        else
          crc = crc << 1;
      }
    }

    var ret = (crc & 0xFFFF).toString(16).toUpperCase();
    ret = ("0").repeat(4 - ret.length) + ret;
    return ret;
  }

}



