import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  title: string;
  constructor(
    public navCtrl: NavController,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.title = '';
    this.route.queryParams.subscribe(_p => {
      const navParams = this.router.getCurrentNavigation().extras.state
      if (navParams) {
        console.log('Nav Parma', navParams);
        let titleStr = navParams.str;
        switch(titleStr){
          case 'food':
            this.title = "Food";
            break;
          case "bev":
            this.title = "Beverages";
            break;
          case "des":
            this.title = "Desserts";
            break;
          case "promo":
            this.title = "Promotions";
            break;
        default: 
            // 
            break;
        }
      }
    })
   }

  ngOnInit() {
  }
  onBack(){
    this.navCtrl.back();
  }

}
