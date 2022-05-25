import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {
  newPwd: string;
  confirmPwd:string;
  constructor(
    public navCtrl:NavController
  ) { }

  ngOnInit() {
  }
  onSubmit(){
    this.navCtrl.navigateForward('welcome');
  }

}
