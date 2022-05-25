import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.page.html',
  styleUrls: ['./thankyou.page.scss'],
})
export class ThankyouPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  back(){
    this.onClose();
    this.navCtrl.navigateForward('tabs/home');
  }
  trackOrder(){
    this.onClose();
    this.navCtrl.navigateForward('tabs/my-orders');
  }
  onClose(){
    this.modalCtrl.dismiss({
      value: true
    })
  }
}
