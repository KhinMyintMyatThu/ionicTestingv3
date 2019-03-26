import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Item1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-item1',
  templateUrl: 'item1.html',
})
export class Item1Page {
  public text1:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text1 = this.navParams.get('text1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Item1Page');
  }

}
