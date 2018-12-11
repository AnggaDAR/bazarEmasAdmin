import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UploadPage } from '../upload/upload';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
      this.navCtrl = navCtrl;          
  }
  upload(){
    // alert("dont click");
    this.navCtrl.setRoot(UploadPage);
  }
}
