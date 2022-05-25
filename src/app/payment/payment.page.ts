import { Component, OnInit } from '@angular/core';
import { NavController, ModalController  } from '@ionic/angular';
import { CreditCardPage } from '../credit-card/credit-card.page'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  cardNumber: any;
  newCard: any;
  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController
  ) { 

  }

  ngOnInit() {
    this.cardNumber = '2178';
  }
  onBack(){
    this.navCtrl.back();
  }
  deleteCard(){

  }
  otherPayment(){
    this.presentModal();
  }
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CreditCardPage,
      // breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.8,
      cssClass: 'custom-modal',
    });
    await modal.present();
    modal.onDidDismiss().then(data => {
      this.newCard = data.data.card;
    });
  }
}
