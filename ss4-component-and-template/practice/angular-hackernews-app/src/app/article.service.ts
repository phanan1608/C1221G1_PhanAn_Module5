import { Injectable } from '@angular/core';
import {Article} from './article';
import {articles} from './ListArticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  article: Article = {};
  articles = articles;
  constructor() { }
  getList(){
    return this.articles;
  }
  addNew(article){
    this.articles.push(article);
  }
}
