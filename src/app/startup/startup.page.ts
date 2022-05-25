import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-startup',
  templateUrl: './startup.page.html',
  styleUrls: ['./startup.page.scss'],
})
export class StartupPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public route: Router,
  ) { 

  }

  ngOnInit() {
  }
  
  login(){
    this.navCtrl.navigateForward('login');
  }
  signup(){
    this.navCtrl.navigateForward('signup');
  }

}
