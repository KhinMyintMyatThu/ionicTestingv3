import { Component , ViewChild} from '@angular/core';
import { NavController, ActionSheetController, PopoverController } from 'ionic-angular';
import { ItemPage } from '../item/item';
import { PopoverComponent } from '../../components/popover/popover';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public text:string;
  public actionText:string;
  public isSearchBarOpened = false;
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public popoverCtrl: PopoverController) {

  }
  goItemPage(){
    this.navCtrl.push(ItemPage, {text:this.text});
  }

  presentActionSheet(){
    let actionSheet= this.actionSheetCtrl.create({
      title: 'Action Sheet Title',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            this.actionText = 'Destructive clicked';
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          icon: 'camera',
          handler: () => {
            this.actionText = 'Archive clicked';
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          icon: 'home',
          role: 'cancel',
          handler: () => {
            this.actionText = 'Cancel clicked';
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  presentPopover(myEvent) {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(popoverData => {
      console.log(popoverData);
    });
  }

  onSearch(event){
    console.log(event.target.value);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
 
}
