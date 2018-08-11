import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css'],
  inputs:['text']
})
export class PageTitleComponent {

  constructor() { }

  ngOnInit() {
  }

}
