import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MessagesPage } from '../pages/messages/messages';
import { CoursesPage } from '../pages/courses/courses';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title:string, component: any, icon:string, color:string}>

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [
      {title: 'Home', component: HomePage, icon: 'home', color: '#459CFF'},
      {title: 'Messages', component: MessagesPage, icon: 'chatboxes', color: '#FFF67E'},
      {title: 'Courses', component: CoursesPage, icon: 'book', color: '#22F67E'},
    ]

  }
  initializeApp() {
    this.platform.ready().then(()=>{
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    })
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

