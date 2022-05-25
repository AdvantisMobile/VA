import { Component, OnInit } from '@angular/core';
import { PopoverController, Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  bottomTabs = environment.bottomTab;
  constructor(
    public popoverController: PopoverController,
    private router: Router,
    private platform: Platform
  ) { }

  ngOnInit() {
  }
  getImage(tab) {
    return this.router.url === `/tabs/${tab.url}` ? tab.srcActivated : tab.src;
  }

}
