import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { AlertController } from "ionic-angular";
import { FormBuilder, FormGroup } from '@angular/forms';
import {User} from "../../shared/user";
import {ElementRef} from '@angular/core';


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

  myForm: FormGroup;
  private myData: any;
  @ViewChild('someVar') el:ElementRef;

  ngAfterViewInit()
  {
    if(this.el !=null)
    this.el.nativeElement.attributes.background.nodeValue = this.img;

  }
  name;
  parameter1;
  info = false;
  donation = false;
  img:string;

  dataArray = [
    new User('',''),
    new User('',''),
    new User('',''),
    new User('',''),
    new User('',''),
    new User('',''),
    new User('',''),
    new User('',''),
    new User('',''),
  ];

  donationArray : User[][];
  counter=0;


  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController ,public navCtrl: NavController, public navParams: NavParams) {
    this.info = navParams.data.op === 'info' ? (true) : (false);
    this.donation = navParams.data.op === 'donat' ? (true) : (false);
    this.parameter1 = navParams.data.description;
    this.img = navParams.data.imageUrl;
    this.name = navParams.data.name;
    this.donationArray = [];

    for(var i: number = 0; i < 3; i++) {
      this.donationArray[i] = [];
      for(var j: number = 0; j< 3; j++) {
        this.donationArray[i][j] = this.dataArray[this.counter];
        this.counter++;
      }
    }

    console.log(this.donationArray);

    // this.myForm = builder.group({
    //   'names': '',
    //   'message': ''
    // });

  }

  onDonation(user: User,col: number ,index: number) {
    this.donationArray[index][col] = user;
    let toast = this.toastCtrl.create({
      message: 'Donation successful from ' + user.name +" with " + user.amount + " Euros",
      position: 'bottom',
      cssClass: 'toastClass',
      duration: 3000
    });
    toast.present();
  }

  onSubmit(formData) {
    console.log('Form data is ', formData);
    this.myData = formData;
  }

  ngOnInit() {
    this.parameter1 = this.navParams.data.description;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  Alert(col,i) {
    let alert = this.alertCtrl.create(
      {
        title: 'titulo de prueba',
        message: 'Seleccionar nombre del donante y la cantidad a donar',
        inputs: [
          {
            name: 'username',
            max: '11',
            placeholder: 'Name'
          },
          {
            name: 'amount',
            placeholder: 'Amount',
          }
        ],
        buttons: [
          {
            text: 'Save',
            handler: (data) => {
              console.log(data.username);
              let user = new User(data.username,data.amount);
              this.onDonation(user,col,i);

              //this.dataArray.push(data.username);
              console.log('Save clicked');
            }
          },
           // otro boton
          {
            role: 'Cancel',
            text: 'Cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }

          ],

      },

    );
    alert.present();
  }
}
