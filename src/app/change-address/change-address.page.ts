import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.page.html',
  styleUrls: ['./change-address.page.scss'],
})
export class ChangeAddressPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  onBack(){
    this.navCtrl.back();
  }

}
