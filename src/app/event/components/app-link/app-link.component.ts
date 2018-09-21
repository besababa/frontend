import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './app-link.component.html',
  styleUrls: ['./app-link.component.css'],
  inputs:['app']
})
export class AppLinkComponent implements OnInit {
  public app;
  constructor() { }

  ngOnInit() {
  }

}
