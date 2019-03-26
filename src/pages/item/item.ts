import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item1Page } from '../item1/item1';

/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  public text:string;
  public text1:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = this.navParams.get('text');
    console.log(this.navParams.get('text'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

  goItem1Page(){
    this.navCtrl.push(Item1Page, {text1:this.text1});
  }

}
