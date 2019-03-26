import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  items: any;
  text: string;

  constructor(public viewCtrl: ViewController) {
    console.log('Hello PopoverComponent Component');
    this.items= [
      {item:'Test 1'},
      {item:'Test 2'},
      {item:'Test 3'},
      {item:'Test 4'},
      {item:'Test 5'},
      {item:'Test 6'},
      {item:'Test 7'},
      {item:'Test 8'},
      {item:'Test 9'},
      {item:'Test 10'},
      {item:'Test'},
      {item:'Test'},
      {item:'Test'},
      {item:'Test'},
      {item:'Test'},
      {item:'Test'},
    ]
    this.text = 'Hello World';
  }

  itemClick(item){
      this.viewCtrl.dismiss(item);
  }

}
