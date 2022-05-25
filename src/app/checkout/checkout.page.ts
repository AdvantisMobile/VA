import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { CreditCardPage } from '../credit-card/credit-card.page'
import { ThankyouPage } from '../thankyou/thankyou.page';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cashDelivery:any;
  visa:any;
  paypal:any;

  newCard: any;
  finish:any;
  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  onBack(){
    this.navCtrl.back();
  }
  changeAddress(){
    console.log('Change Address.. CheckoutPage.TS!');
    this.navCtrl.navigateForward('/change-address');
  } 
  addCard(){
    this.presentModal();
  }
  sendOrder(){
    this.thanksModal();
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
  async thanksModal() {
    const modal = await this.modalCtrl.create({
      component: ThankyouPage,
      // breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.8,
      cssClass: 'custom-modal',
    });
    await modal.present();
    modal.onDidDismiss().then(data => {
      this.finish = data.data.value;
    });
  }

}
