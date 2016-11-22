import { Component, ViewChild } from '@angular/core';
import { ViewController, Slides, NavParams } from 'ionic-angular';

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
    numLikes: number;
    article: any;


    constructor(public viewCtrl: ViewController, public params: NavParams) {
        this.article = params.get('article');
        this.slideCount = 1;
        this.numLikes = 14;
        this.sliderOptions = {
            pager: false,
            autoplay: 0,
            loop: false,
            initialSlide: 0,
            speed: 300,
            direction: 'horizontal'
        }
        setTimeout(() => {
            this.slider.slideTo(1, 300);
        }, 750)
    }

    close() {
        this.slider.slideTo(0, 300);
        setTimeout(() => {
            this.viewCtrl.dismiss();
        }, 750)
    }

    addLikes() {
        this.numLikes += 1;
    }

    onSlideChanged(index) {
        this.slideCount = index + 1;
    }

}
