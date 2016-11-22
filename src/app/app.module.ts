import { InterestsPage } from './../pages/interests/interests';
import { AddArticleComponent } from './../components/add-article/add-article';
import { ProfilePage } from './../pages/profile/profile';
import { CategoryPage } from './../pages/category/category';
import { FeedPage } from './../pages/feed/feed';
import { ArticleComponent } from './../components/article/article';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
    declarations: [
        MyApp,
        CategoryPage,
        ProfilePage,
        TabsPage,
        FeedPage,
        InterestsPage,
        ArticleComponent,
        AddArticleComponent
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        CategoryPage,
        ProfilePage,
        TabsPage,
        FeedPage,
        InterestsPage,
        ArticleComponent,
        AddArticleComponent
    ],
    providers: []
})
export class AppModule { }
