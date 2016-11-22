import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

/*
  Generated class for the AddArticle component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'add-article',
  templateUrl: 'add-article.html'
})
export class AddArticleComponent {

  article: any;
  constructor(public viewCtrl: ViewController, private formBuilder: FormBuilder) {
    this.article = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      contentBody: ['', Validators.required],
      articleType: ['', Validators.required],
      recurring: ['false']
    });
  }

  saveForm() {
    console.log(this.article.value)
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }



}
