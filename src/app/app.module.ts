import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MessagesPage } from '../pages/messages/messages';
import { CoursesPage } from '../pages/courses/courses';
import { SidwebServiceProvider } from '../providers/sidweb-service/sidweb-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MessagesPage,
    CoursesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MessagesPage,
    CoursesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SidwebServiceProvider
  ]
})
export class AppModule {}
