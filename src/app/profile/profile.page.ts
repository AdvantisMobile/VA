import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public router: Router
  ) { }

  ngOnInit() {
  }
  
  editProfile(){

  }

  signOut(){
    this.router.navigateByUrl('login');
  }

}
