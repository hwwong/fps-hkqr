import { Component, Renderer } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';


/**
 * Generated class for the NumInputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-num-input',
  templateUrl: 'num-input.html',
})
export class NumInputPage {


  amount = "";
  keypads = [
    ["7", "8", "9", "Del"],
    ["4", "5", "6", "AC"],
    ["1", "2", "3"],
    ["0", ".", "OK"]
  ];

  constructor(public renderer: Renderer, private view: ViewController, private navParams: NavParams) {
    
      this.renderer.setElementClass(view.pageRef().nativeElement, 'custom-popup', true);
  }

  keyPress(index) {

    switch (index) {
      case "OK":
        // console.log(this.amount);
        this.view.dismiss(Number(this.amount));
        return;

      case "Del":
        this.amount = this.amount.toString().slice(0, -1);
        return;

      case "AC":
        this.amount = "";
        return;

      case ".":
        if (this.amount.includes(".")) { return }
        break;
    }

    if (this.amount.length > 8) { return }

    if (this.amount.slice(-3, -2) != ".") {
      this.amount += index;
    }

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NumInputPage');
  }

}
