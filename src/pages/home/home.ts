import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { HkqrProvider } from '../../providers/hkqr/hkqr';
import { AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hkqrRoot = {};
  hkqrAccount = {};
  QR_value = " ";

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    private hkqrProvider: HkqrProvider,
    private alertCtrl: AlertController,
    private storage: Storage) {

    this.hkqrRoot[0] = "01"
    this.hkqrRoot[1] = "11";
    this.hkqrRoot[52] = "0000";
    this.hkqrRoot[53] = "344";
    this.hkqrRoot[58] = "HK";
    this.hkqrRoot[59] = "NA";
    this.hkqrRoot[60] = "HK";

    this.hkqrAccount[0] = "hk.com.hkicl"
    this.hkqrAccount[1] = "004";
    this.hkqrRoot[26] = this.hkqrAccount;


    storage.get("mobile").then((val) => {
      this.hkqrAccount[3] = val;
      this.QR_value = this.hkqrProvider.genQRvalue(this.hkqrRoot);

    }).catch(err => {
      console.log(err);
      this.hkqrAccount[3] = "+852-1234678"
      this.QR_value = this.hkqrProvider.genQRvalue(this.hkqrRoot);
    });


  }

  openNumInput() {

    const ni = this.modalCtrl.create('NumInputPage', {}
      , { showBackdrop: true, enableBackdropDismiss: true });
    ni.present();

    ni.onDidDismiss((data) => {
      if (data == null) { return }
      console.log("Input: " + data);

      if (data == 0)
        delete this.hkqrRoot[54];
      else
        this.hkqrRoot[54] = data.toString();
      this.hkqrRoot[26] = this.hkqrAccount;
      this.QR_value = this.hkqrProvider.genQRvalue(this.hkqrRoot);

    })
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'FPS Mobile',
      subTitle: "Format: +852-12345678",
      inputs: [
        {
          name: 'mobile',
          placeholder: 'mobile',
          value: this.hkqrAccount[3]
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {

            var m = data.mobile.toString().trim();
            console.log(m);
            if (m != "") {
              this.hkqrAccount[3] = m;
              this.storage.set('mobile', m);
              this.QR_value = this.hkqrProvider.genQRvalue(this.hkqrRoot);
              // console.log(data.mobile)
            }
          }
        }
      ]
    });
    alert.present();
  }
}
