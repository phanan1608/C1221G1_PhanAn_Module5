import { Component, OnInit } from '@angular/core';
import {Article} from '../article';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  article: Article = {};

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  addNewArticle(){
    this.articleService.addNew(this.article);
  }


}
