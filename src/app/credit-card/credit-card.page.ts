import { Component, OnInit } from '@angular/core';
import { ModalController  } from '@ionic/angular';
@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.page.html',
  styleUrls: ['./credit-card.page.scss'],
})
export class CreditCardPage implements OnInit {
  removeCard: boolean = false;
  card: any;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  onClose(){
    this.modalCtrl.dismiss();
  }
  addCard(){
    this.modalCtrl.dismiss({
      card: this.card
    });
  }
  changeToggle(){
    console.log('Change Toggle!');
    // this.removeCard = !this.removeCard;
  }
}
