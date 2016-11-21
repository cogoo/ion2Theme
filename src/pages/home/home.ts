import { ArticleComponent } from './../../components/article/article';
import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  articleOpen: boolean;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openArticle() {
    this.articleOpen = true;
    let modal = this.modalCtrl.create(ArticleComponent);
    setTimeout(() => {
      modal.present();
      this.articleOpen = false;
    },500)
    
    
  }

  setClass() {
    let classes = {
      'article-open': this.articleOpen
    };
    return classes;
  }

}
