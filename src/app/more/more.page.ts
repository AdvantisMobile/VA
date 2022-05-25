import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  constructor(
    public navCtrl:NavController
  ) { }

  ngOnInit() {
  }
  payment(){
    this.navCtrl.navigateForward('tabs/payment');
  }
  myOrders(){
    this.navCtrl.navigateForward('tabs/my-orders');
  }
  notifications(){
    this.navCtrl.navigateForward('tabs/notification');
  }
  inbox(){
    this.navCtrl.navigateForward('tabs/inbox');
  }
  about(){
    this.navCtrl.navigateForward('tabs/aboutus');
  }

}
