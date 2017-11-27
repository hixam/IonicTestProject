import {Component, Input, OnInit} from '@angular/core';
import {NavController, ModalController, Content, AlertController} from 'ionic-angular';
import { TestPage } from '../test/test';
import {PreviewPage} from "../preview/preview";
import { MenuController } from 'ionic-angular';
// import * as Pusher from '../../../node_modules/pusher';
// import { Push, PushObject, PushOptions } from '@ionic-native/push';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  activeMenu: string;

  name;
  img;
  miListaFiltre;
  miLista : Array<any> =[
    {
      name : 'CAPILLA DE LA VIRGEN DE LA GUÍA',
      description : 'Es una pequeña ermita renacentista que sufrió una importante reconstrucción en el siglo XIX. Su planta cuadrangular da la impresión de haber sido acortada, esto quiere decir que el actual inmueble estaría formado solamente por la nave de la original.',
      url: 'https://imgs-akamai.mnstatic.com/17/cb/17cb5b2f94d207db6fb71c0bfa106443.jpg'
    },
    {
      name : 'Monumento 2',
      description : 'Monumento 2 some description some description some description some description some description',
      url: 'http://www.nosgustaviajar.es/wp-content/uploads/2010/01/oporto-iglesias-monumentos-300x225.jpg'
    },
    {
      name : 'Monumento 3',
      description : 'Monumento 3 some description some description some description some description some description',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Castro-Urdiales_-_Iglesia_de_Santa_Maria_de_la_Asuncion_01.jpg'
    },
    {
      name : 'Monumento 4',
      description : 'Monumento 4 some description some description some description some description some description',
      url: 'http://enmiscriptorium.com/wp-content/uploads/2013/07/Plaza-de-la-Merced.-Iglesia-de-la-Merced-y-monumento-a-Torrijos-19011.jpg'
    }
  ]
  constructor(public menuCtrl: MenuController,public alertCtrl: AlertController,public navCtrl: NavController, public modalCtrl: ModalController) {


    // Enable pusher logging - don't include this in production
    //Pusher.prototype.logToConsole = true;

    // var pusher = new Pusher.arguments('693e23eea303b98a08bf', {
    //   cluster: 'eu',
    //   encrypted: true
    // });
    //
    // var channel = pusher.subscribe('my-channel');
    // channel.bind('my-event', function(data) {
    //   alert(data.message);
    // });

  }
  openMenu() {
    this.activeMenu = 'menu1';
    this.menuCtrl.enable(true, 'menu1');
    this.menuCtrl.open();
  }
  ngOnInit() {
    this.miListaFiltre = this.miLista;

  }

  @Input("content") protected content: Content;


  AddCliked() {
    let alert = this.alertCtrl.create(
      {
        title: 'Add new monument',
        message: 'Please complete the form data to add new monument',
        inputs: [
          {
            name: 'monuName',
            placeholder: 'Monument Name'
          },
          {
            name: 'monuDesc',
            placeholder: 'Monument Description'
          },
          {
            name: 'monuImg',
            placeholder: 'Monuments image URL'
          }
          ],

        buttons:[
          {
            text: 'Add',
            cssClass : 'alertMsg',
            handler: data => {
              console.log('data are :' + data);
              this.miLista.unshift(
                {
                  name: data.monuName,
                  description: data.monuDesc,
                  url: data.monuImg
                }
              )
            }
          }
        ]
      });
    alert.present();
  }

  showContent(user: any, op: any) {
    this.navCtrl.push(TestPage,{
      description: user.description,
      name: user.name,
      op: op,
      imageUrl: user.url
    });
  }

  showImage(name: any, url: any) {
    this.name = name;
    this.img = url;
    this.navCtrl.push(PreviewPage,{
      name: name,
      imageUrl : url
    });
  }

  presentProfileModal(name: any, url: any) {
  //  this.photoViewer.show(url);
    // const profileModal = this.modalCtrl.create(PreviewPage, { name : name, imageUrl: url} );
    //profileModal.present();
  }

  resetSearch() {
    this.miListaFiltre = this.miLista;
  }

  filterItems(ev:any) {

    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.miListaFiltre = this.miLista.filter( function (item) {
        return item.name.toLowerCase().includes(val.toLowerCase());
      });
    }else{
      this.miListaFiltre = this.miLista;
    }
  }
}
