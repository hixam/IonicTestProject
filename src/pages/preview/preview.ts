import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {
  imageUrl;
  title;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imageUrl = this.navParams.data.imageUrl;
    this.title = this.navParams.data.name;
  }

  // ngOnInit() {
  //   this.imageUrl = this.navParams.data.imageUrl;
  //   this.title = this.navParams.data.name;
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewPage');
  }

}
