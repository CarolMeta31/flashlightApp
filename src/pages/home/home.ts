import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {Flashlight} from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

isOn:boolean;

  constructor(public navCtrl: NavController,private platform:Platform,
  public flash:Flashlight) {

    this.platform.ready().then(()=>{

   this.updateFlahLightStatus()
    })
  }

  switchOn(){

    this.flash.switchOn();
    this.updateFlahLightStatus()

  }


  switchOFF(){
    this.flash.switchOff();
   this.updateFlahLightStatus()
  }

  toggleMethod(){
    this.flash.toggle();
   this.updateFlahLightStatus()
  }
  updateFlahLightStatus(){

   this.isOn = this.flash.isSwitchedOn();

  }


}
