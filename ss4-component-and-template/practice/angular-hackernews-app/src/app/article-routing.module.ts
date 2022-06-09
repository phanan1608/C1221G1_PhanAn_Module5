import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {CreateArticleComponent} from './create-article/create-article.component';
import {NavbarComponent} from './navbar/navbar.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'article'},
  {path: 'article', component: ArticleComponent},
  {path: 'create-article', component: CreateArticleComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ArticleRoutingModule { }
