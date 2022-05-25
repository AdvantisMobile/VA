import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  constructor(
    public navCtrl:NavController
  ) { }

  ngOnInit() {
  }
  onBack(){
    this.navCtrl.back();
  }
}
