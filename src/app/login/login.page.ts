import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  erroAuth: boolean
  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.erroAuth = true;
  }
  onSubmit(value:any){
    if(!this.loginForm.valid){
      return;
    }
    this.navCtrl.navigateForward('tabs');                                      
  }
  signUp(){
    this.navCtrl.navigateForward('signup');
  }
  forgotPwd(){
    this.navCtrl.navigateForward('forgot');
  }
  onFb(){

  }
  onGoogle(){

  }
  changeEmail(){

  }
  changePassword(){

  }

}
