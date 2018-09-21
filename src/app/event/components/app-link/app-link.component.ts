import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './app-link.component.html',
  styleUrls: ['./app-link.component.css']
})
export class AppLinkComponent implements OnInit {

  @Input() apps;
  
  constructor() { }

  ngOnInit() {

  }

}
