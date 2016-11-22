import { InterestsPage } from './../interests/interests';
import { AddArticleComponent } from './../../components/add-article/add-article';
import { ModalController } from 'ionic-angular';
import { ProfilePage } from './../profile/profile';
import { CategoryPage } from './../category/category';
import { FeedPage } from './../feed/feed';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  feedRoot: any = FeedPage;
  categoryRoot: any = CategoryPage;
  profileRoot: any = ProfilePage;
  interestsRoot: any = InterestsPage;

  constructor(public modalCtrl: ModalController) {

  }

  addArticle() {
    let modal = this.modalCtrl.create(AddArticleComponent);
    modal.present();
  }
}
