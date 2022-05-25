import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  erroAuth: boolean
  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      direction: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
      confirmPwd: ['', [Validators.required]],
    });
    this.erroAuth = true;
  }
  onSubmit(value:any){
    
  }
  login(){
    this.navCtrl.navigateForward('login');
  }
}
