import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestPage } from '../test/test';

// Globals
declare var google;
declare var mapPage;
declare var InfoBubble;

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  distritos:any;
  ventanas:any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    mapPage = this;
    this.distritos = navParams.data.distritos;
  }

  ionViewDidLoad() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.393552, lng: 2.171345},
        zoom: 12,
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        scaleControl: false,
        fullscreenControl: false,
        clickableIcons: false
      });

      new google.maps.KmlLayer({
        url: 'https://sites.google.com/site/amarisonlinerepository/municipios_bcn4.kmz',
        map: map,
        suppressInfoWindows: false,
        clickable: false,
        preserveViewport: true
      });

      var scope = this;
      Object.keys(this.distritos).forEach(function(nombre) {

          var infoBubble = new InfoBubble({
            map: map,
            content: '<div class="phoneytext" onclick="javascript:mapPage.click(\'' + nombre + '\')"><strong>' + scope.distritos[nombre].percent + '%</strong> ' + nombre + '</div>',
            position: new google.maps.LatLng(scope.distritos[nombre].lat, scope.distritos[nombre].long),
            shadowStyle: 1,
            padding: 0,
            backgroundColor: 'rgb(248,248,248)',
            borderRadius: 4,
            arrowSize: 10,
            borderWidth: 1,
            borderColor: '#2c2c2c',
            disableAutoPan: true,
            hideCloseButton: true,
            arrowPosition: 30,
            backgroundClassName: 'phoney',
            arrowStyle: 2
          });

          infoBubble.open();

        });
  }

  click(distrito){
    this.navCtrl.push(TestPage, { 'distrito': distrito });
  }
}
