import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {AlertController} from "ionic-angular";
import {User} from "../../shared/user";
import {ElementRef} from '@angular/core';
import {DonationRow} from "../../shared/DonationRow";
import {ImagePart} from "../../shared/ImagePart";
import {DonationObject} from "../../shared/DonationObject";
import { ModalController} from 'ionic-angular';
import {ModalsPage} from "../modals/modals";

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



export class TestPage implements OnInit {

  private NUM_COLUMNS : number = 3;
  private NUM_ROWS : number = 4;

  private myData: any;

  //Padre
  private donationRowList: Array<DonationRow>;

  //Padre
  private donationRow: DonationRow;

  //Hijo
  private imageParts: ImagePart;

  //Hijo de hijo
  private donationObj: DonationObject;

  //User object
  private usr = new User();


  name;
  parameter1;
  info = false;
  donation = false;
  img: string;

  dataArray = [
    new User('', ''),
    new User('', ''),
    new User('', ''),
    new User('', ''),
    new User('', ''),
    new User('', ''),
    new User('', ''),
    new User('', ''),
    new User('', ''),
  ];

  donationArray: User[][];
  counter = 0;
  isShow = false;

  @ViewChild('someVar') el: ElementRef;

  ngAfterViewInit() {
    if (this.el != null)
      this.el.nativeElement.attributes.background.nodeValue = this.img;

  }

  constructor(public modalCtrl: ModalController,public toastCtrl: ToastController, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {

    this.info = navParams.data.op === 'info' ? (true) : (false);
    this.donation = navParams.data.op === 'donat' ? (true) : (false);
    this.parameter1 = navParams.data.description;
    this.img = navParams.data.imageUrl;
    this.name = navParams.data.name;
    this.donationArray = [];

    this.populate();

    for (var i: number = 0; i < 3; i++) {
      this.donationArray[i] = [];
      for (var j: number = 0; j < 3; j++) {
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

  onDonation(user: User, col: number, index: number) {
    this.donationArray[index][col] = user;
    let toast = this.toastCtrl.create({
      message: 'Donation successful from ' + user.name + " with " + user.amount + " Euros",
      position: 'bottom',
      // showCloseButton : true,
      cssClass: 'toastClass',
      duration: 3000
    });
    toast.present();
  }

  donorsList () {

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


  presentContactModal(dArray : Array<DonationObject>) {
    let contactModal = this.modalCtrl.create(ModalsPage,{data: dArray});
    contactModal.present();
  }

  popupShow(dArray : Array<DonationObject>) {
    let alert = this.alertCtrl.create(
      {
        title: 'titulo de prueba',
        message: dArray.filter(res=> res.user.names.toString())+"",
      },
    );
    alert.present();
  }


  Alert(col, i) {
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
              let user = new User(data.username, data.amount);
              this.onDonation(user, col, i);

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



  public populate() {

    //Initialize principal objects
    this.donationRow = new DonationRow(); // Donation in 1 table row
    this.imageParts = new ImagePart(); // 1 cell of a row
    this.donationObj = new DonationObject(); // Donation Object in a each cell

    //Init user
    this.usr.names = "Test Name";
    this.usr.id = Math.floor(Math.random() * 102016) + 1 + "";
    this.usr.amounts = 10;
    //Init image parts Array
    this.imageParts.donations = new Array<DonationObject>();

    //Set Data to the donation object
    for (let i = 0; i < 4; i++) {
      this.donationObj.user = this.usr;
      this.donationObj.amount = 3+i*3,14;
      this.donationObj.img = i;

      //Push the donation object to the image part donations array
      this.imageParts.donations.push(this.donationObj);
    }

    //init donation row Array
    this.donationRow.imgPart = new Array<ImagePart>();

    //Push every thing to the donation row object
    for(let j=0 ; j< this.NUM_COLUMNS ; j++) {
      this.donationRow.imgPart.push(this.imageParts);
    }

    //Initialize the whole donation row list
    this.donationRowList = new Array<DonationRow>();

    for(let j=0 ; j< this.NUM_ROWS ; j++) {
      this.donationRowList.push(this.donationRow);
    }
  }

}
