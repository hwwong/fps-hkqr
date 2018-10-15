import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HkqrProvider } from '../../providers/hkqr/hkqr';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  //scannedCode = "00020101021126400012hk.com.hkicl01030040313+852-928470435204000053033445802HK5902NA6002HK630480D3";
  scannedCode="test";
  EMVcode = true;

  Data_id = [1, 26, 52, 53, 54, 58, 59, 60, 63];
  QRroot = null;
  constructor(private hkqr: HkqrProvider,
    private barcodeScanner: BarcodeScanner,
    public navCtrl: NavController,
    private vibration: Vibration) {

    this.QRroot = this.hkqr.parseEMVQR(this.scannedCode);
     this.scanCode();

    console.log(this.QRroot);
    console.log(this.QRroot[26]);
    console.log(Object.keys(this.QRroot));

  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      this.QRroot = this.hkqr.parseEMVQR(this.scannedCode);
      this.EMVcode=this.QRroot;
      if (this.QRroot) this.vibration.vibrate(500);
    }, (err) => {
      console.log('Error: ', err);
    });
  }

}
