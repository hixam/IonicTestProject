import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from "ionic-angular";

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  parameter1;
  dataArray = [];

  info = false;
  donation = false;
  img;

  constructor(public alertCtrl: AlertController ,public navCtrl: NavController, public navParams: NavParams) {
    this.info = navParams.data.op === 'info' ? (true) : (false);
    this.donation = navParams.data.op === 'donat' ? (true) : (false);
    this.parameter1 = navParams.data.description;
    this.img = navParams.data.imageUrl;
  }

  ngOnInit() {

    this.parameter1 = this.navParams.data.description;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
  Alert(msg: any) {
    let alert = this.alertCtrl.create(
      {
        title: 'titulo de prueba',
        message: 'el mensaje es : ' + msg,
        inputs: [
          {
            name: 'username',
            placeholder: 'Username'
          },
          {
            name: 'password',
            placeholder: 'Password',
            type: 'password'
          }
        ],
        buttons: [
          {
            text: 'Save',
            handler: (data) => {
              console.log(data.username);
              this.dataArray.push(data.username);
              console.log('Cancel clicked');
            }
          },
           // otro boton
          {
            text: 'Buy',
            handler: () => {
              console.log('Buy clicked');
            }
          }

          ],

      },

    );
    alert.present();
  }
}
