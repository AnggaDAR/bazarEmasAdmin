// import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {
    name: 'admin',
    pw: 'admin'
  };

  constructor(public navCtrl: NavController, /*private authProvider: AuthProvider,*/ private alertCtrl: AlertController) { }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  // loginUser(){
  //   this.authProvider.login(this.user.name, this.user.pw).then(success => {
  //     if(success){
  //       let alert1 = this.alertCtrl.create({
  //         title: 'Login Failed',
  //         message: 'Please check your credentials',
  //         buttons: ['Ok']
  //       });
  //       alert1.present();
  //       this.navCtrl.setRoot('MenuPage');
  //     } else {
  //       let alert = this.alertCtrl.create({
  //         title: 'Login Failed',
  //         message: 'Please check your credentials',
  //         buttons: ['Ok']
  //       });
  //       alert.present();
  //     }
  //   });
  // }
}
