import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
 //@HostBinding('attr.class') cssClass = 'row';
  @Input()
  article!: article;

  constructor() { 

  }

  ngOnInit(): void {
  }

  voteUp(): boolean{
    console.log('voteup called !');
    this.article.voteUp();
    return false;
  }

  voteDown() :boolean{
    console.log('voteDown called !');
    this.article.voteDown();
    return false;
  }
}
