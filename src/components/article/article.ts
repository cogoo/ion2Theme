import { Component, ViewChild } from '@angular/core';
import { ViewController, Slides } from 'ionic-angular';

/*
  Generated class for the Article component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
    selector: 'article',
    templateUrl: 'article.html'
})
export class ArticleComponent {

    @ViewChild('mySlider') slider: Slides;
    sliderOptions: any;
    slideCount: number;

    constructor(public viewCtrl: ViewController) {
        this.slideCount = 1;
        this.sliderOptions = {
            pager: false,
            autoplay: 0,
            loop: false,
            initialSlide: 0,
            speed: 300,
            direction: 'horizontal'
        }
    }

    close() {
        this.viewCtrl.dismiss();
    }

    onSlideChanged(index) {
        this.slideCount = index + 1;
    }

}
