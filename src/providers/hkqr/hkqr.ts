import { Injectable } from '@angular/core';
import { EMV, bankCode } from './data'
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
    // var emv =EMV;
    console.log('Hello HkqrProvider Provider');
    console.log(bankCode);
  }

  genQRvalue(val) {
    let data = Object.assign({}, val);
    //combine EMV QR template
    for (let j = 0; j < this.EmvTemplateId.length; j++)
      for (let i = this.EmvTemplateId[j][0]; i <= this.EmvTemplateId[j][1]; i++)
        if (data[i] != null)
          data[i.toString()] = this.combineQRvalue(data[i.toString()]);

    let str = this.combineQRvalue(data);
    str += "6304" + this.crc16(str + "6304");
    return str;
  }

  combineQRvalue(data) {
    let l = 0;
    let str = "";
    for (let id in data) {
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
    for (let id = 0; id < this.EmvTemplateId.length; id++) {
      for (let i = this.EmvTemplateId[id][0]; i <= this.EmvTemplateId[id][1]; i++) {
        if (typeof this.data[i] !== "undefined") {
          let str = this.parseData(this.data[i]);
          if (!str) {
            console.log("ID or length invalid");
            return false;
          }
          this.data[i] = str;
        }
      }
    }

    let arr = [];
    for (const key in this.data) {
      console.log(key + EMV[key].name)
       arr.push([key,EMV[key].name,this.data[key]]);
    }
    return arr;
    // return this.data;
  }

  parseData(qr) {
    let data = {};
    let id, size, i = 0;

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
    let crc = 0xFFFF;
    for (let c = 0; c < data.length; c++) {
      crc ^= data.charCodeAt(c) << 8;
      for (let i = 0; i < 8; i++) {
        if (crc & 0x8000)
          crc = (crc << 1) ^ 0x1021;
        else
          crc = crc << 1;
      }
    }

    let ret = (crc & 0xFFFF).toString(16).toUpperCase();
    ret = ("0").repeat(4 - ret.length) + ret;
    return ret;
  }

}



