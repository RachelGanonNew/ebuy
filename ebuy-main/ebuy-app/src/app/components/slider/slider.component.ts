import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css','./swiper-bundle.min.css']
})
export class SliderComponent implements OnInit {

  ngAfterViewInit() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: true,
    //   spaceBetween: 3,
      centeredSlides: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
