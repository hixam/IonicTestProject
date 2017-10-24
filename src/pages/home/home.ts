import {Component, Input, OnInit} from '@angular/core';
import {NavController, ModalController, Content, AlertController} from 'ionic-angular';
import { TestPage } from '../test/test';
import {PreviewPage} from "../preview/preview";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name;
  img;
  miListaFiltre;
  miLista : Array<any> =[
    {
      name : 'Monumento 1',
      description : 'Monumento 1 some description some description some description some description some description',
      icon: 'logo-angular',
      url: 'https://media-cdn.tripadvisor.com/media/photo-s/01/56/6a/3a/la-iglesia-de-andacollo.jpg'
    },
    {
      name : 'Monumento 2',
      description : 'Monumento 2 some description some description some description some description some description',
      icon: 'logo-css3',
      url: 'http://www.nosgustaviajar.es/wp-content/uploads/2010/01/oporto-iglesias-monumentos-300x225.jpg'
    },
    {
      name : 'Monumento 3',
      description : 'Monumento 3 some description some description some description some description some description',
      icon: 'logo-html5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Castro-Urdiales_-_Iglesia_de_Santa_Maria_de_la_Asuncion_01.jpg'
    },
    {
      name : 'Monumento 4',
      description : 'Monumento 4 some description some description some description some description some description',
      icon: 'logo-javascript',
      url: 'http://enmiscriptorium.com/wp-content/uploads/2013/07/Plaza-de-la-Merced.-Iglesia-de-la-Merced-y-monumento-a-Torrijos-19011.jpg'
    }
  ]
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public modalCtrl: ModalController) {
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

  filterItems(ev:any) {

    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.miListaFiltre = this.miLista.filter( function (item) {
        return item.name.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
}
