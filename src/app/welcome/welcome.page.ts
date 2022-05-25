import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  showSkip = true;
  @ViewChild('slides') slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index,className) {
        return '<span class="' + className + '" style="width: 10px; height:10px;border-radius: 5px"> </span>';
      },
    }
  };
  constructor(
    public menu: MenuController,
    public router: Router
  ) { }

  ngOnInit() {
  }
  startApp() {
    this.router.navigateByUrl('tabs/home');       
  }
  nextPage(){
    this.slides.getActiveIndex().then(number=>{
      console.log('Activityt Index', number);
      if(number ==2){
        this.router.navigateByUrl('tabs');
      }else{
        this.slides.slideNext();
      }

    });
    
  }
  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }
}
