import { Component } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleData } from '../data/data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles: Article[] = [];
  constructor(){}

  ngOnInit(): void {
    this.articles = new ArticleData(). getData();
    console.log('created')
  }
}
