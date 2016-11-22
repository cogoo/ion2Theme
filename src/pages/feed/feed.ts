import { ArticleComponent } from './../../components/article/article';

import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ModalController } from 'ionic-angular';

/*
  Generated class for the Feed page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  @ViewChild('mySlider') slider: Slides;
  sliderOptions: any;
  slideCount: number;
  articleOpen: boolean;
  articles: any[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.slideCount = 1;
    this.sliderOptions = {
      pager: true,
      autoplay: 0,
      loop: false,
      initialSlide: 0,
      speed: 300,
      direction: 'vertical'
    }
    this.articles = [
      {
        title: 'Lets not React',
        author: 'Craig Michaels',
        tags: ['React', 'JS'],
        img: 'm2.jpg'
      },
      {
        title: 'The Beauty of Ionic 2',
        author: 'Mark Ronson',
        tags: ['Hybrid', 'Mobile'],
        img: 'm1.jpg'
      },
      {
        title: 'Bi-Angular',
        author: 'James Coor',
        tags: ['Angular', 'JS'],
        img: 'm3.jpg'
      },
      {
        title: 'Its a Knockout',
        author: 'Geoff Jorge',
        tags: ['Knockout', 'JS'],
        img: 'm4.jpg'
      }
    ]

  }

  ionViewDidLoad() {
    console.log('Hello FeedPage Page');
  }

  openArticle(article) {
    this.articleOpen = true;
    let modal = this.modalCtrl.create(ArticleComponent, {article: article});
    setTimeout(() => {
      modal.present();
      this.articleOpen = false;
    }, 500)
  }

  setClass() {
    let classes = {
      'article-open': this.articleOpen
    };
    return classes;
  }

  onSlideChanged(index) {
    this.slideCount = index + 1;
  }

}
