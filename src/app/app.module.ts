import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TestPage } from "../pages/test/test";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PreviewPage} from "../pages/preview/preview";
import {FormsModule} from '@angular/forms';
import { LowerCasePipe } from '@angular/common';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ToastController } from 'ionic-angular';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestPage,
    PreviewPage
  ],
  imports: [
    IonicImageViewerModule,
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
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
