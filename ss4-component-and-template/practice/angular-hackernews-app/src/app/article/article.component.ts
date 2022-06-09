import { Component, OnInit } from '@angular/core';
import {Article} from '../article';
import {articles} from '../ListArticle';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {};
  articles = this.articleService.getList();

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }
}
