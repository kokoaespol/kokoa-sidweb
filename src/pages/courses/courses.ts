import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SidwebServiceProvider } from '../../providers/sidweb-service/sidweb-service'

/**
 * Generated class for the CoursesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {
  public courses: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public sidwebProvider: SidwebServiceProvider) {
    this.courses = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
    this.sidwebProvider.getCourses().subscribe(data => {
      this.courses = data;
    });
  }
  

}
