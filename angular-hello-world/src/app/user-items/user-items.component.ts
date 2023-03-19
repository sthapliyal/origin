import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.scss']
})
export class UserItemsComponent implements OnInit {
  @Input() name: string;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
