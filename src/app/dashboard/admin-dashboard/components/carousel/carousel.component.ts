import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const myCarouselElement = document.getElementById('customCarousel');
      if (myCarouselElement) {
        new bootstrap.Carousel(myCarouselElement, {
          interval: 4000,
          ride: 'carousel',
          pause: false
        });
      }
    }
  }
}
