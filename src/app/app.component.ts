import { Component } from '@angular/core';
import { Platform,MenuController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { TestPage } from '../../src/pages/test/test';

import { distritos } from "../assets/data.distritos";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  tab1: any;
  tab2: any;
  tab3: any;

  distritos:any;

  constructor( menu: MenuController,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.distritos = distritos;
    });

    menu.enable(true);
    this.tab1 = HomePage;
    this.tab2 = TestPage;
    this.tab3 = MapPage;
  }

  openPage(page: String) {

  }
}

