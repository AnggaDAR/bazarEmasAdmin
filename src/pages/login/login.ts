// import { AuthProvider } from './../../providers/auth/auth';
import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Http, Headers, RequestOptions } from '@angular/http';
import {  } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild("username") username;
  @ViewChild("password") password;
  data:string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private http:Http, public loading:LoadingController) {

  }
  
  register(){
    this.navCtrl.push(RegisterPage);
  }

  login(){
    //check to confirm username and password field are filled
    if(this.username.value == ""){
      let alert = this.alertCtrl.create({
        title:"ATTENTION",
        subTitle:"Username field is empty",
        buttons:['OK']
      })
      alert.present();
    } else if(this.password.value == ""){
      let alert = this.alertCtrl.create({
        title:"ATTENTION",
        subTitle:"Password field is empty",
        buttons:['OK']
      })
      alert.present();
    } else{
      var headers = new Headers();
      headers.append('Accept','application/json');
      headers.append('Content-Type','application/json');
      let options = new RequestOptions({headers:headers});
      let data = {
        username: this.username.value,
        password: this.password.value
      };
      let loader = this.loading.create({
        content: 'Processing, please wait...'
      });
      loader.present().then(()=>{
        this.http.post('http://localhost/bazaremas/login.php',data,options)
        .map(res=>res.json())
        .subscribe(res=>{
          console.log(res)
          loader.dismiss()
          if(res == "Your Login Success"){
            let alert = this.alertCtrl.create({
              title:"CONGRATS",
              subTitle:(res),
              buttons:['OK']
            });
            alert.present();
          } else {
            let alert = this.alertCtrl.create({
              title:"ERROR",
              subTitle: (res),
              buttons:['OK']
            });
            alert.present();
          }
        });
      })
    }
  }
}
