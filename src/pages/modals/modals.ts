import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {DonationObject} from "../../shared/DonationObject";

/**
 * Generated class for the ModalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html',
})
export class ModalsPage {

  donationArray: Array<DonationObject>;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.donationArray = navParams.data.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalsPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
