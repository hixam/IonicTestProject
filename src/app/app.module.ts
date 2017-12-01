import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TestPage } from "../pages/test/test";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import {PreviewPage} from "../pages/preview/preview";
import {FormsModule} from '@angular/forms';
import { LowerCasePipe } from '@angular/common';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ToastController } from 'ionic-angular';
import {HeaderComponent} from "../components/header/header";
import {HeaderPage} from "../pages/header/header";
import {ModalsPageModule} from "../pages/modals/modals.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    TestPage,
    HeaderPage,
    PreviewPage
  ],
  imports: [
    IonicImageViewerModule,
    BrowserModule,
    FormsModule,
    ModalsPageModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    TestPage,
    PreviewPage
  ],
  providers: [
    ToastController,
    LowerCasePipe,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
