import { Component } from '@angular/core';
import { article } from './article/article.model';

enum  traveller {firstname, lastName, age}; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   articles: Array<article>;
   

  constructor(){
    this.articles = [
      new article("Angular 1", "https://angular.io/", 1),
      new article("Angular 2", "https://angular.io/", 2),
      new article("Angular 3", "https://angular.io/", 5)
    ];
  
  }
 

  addArticle(title: HTMLInputElement, link: HTMLInputElement){
    console.log(`Adding article title :${title.value} and link: ${link.value}`);
    this.articles.push(new article(title.value, link.value));
    title.value = '';
    link.value = ';'
    return false;
  }
  
  sortedArticles(){
    return this.articles.sort((a: article, b: article) => b.votes - a.votes )
  }
}
