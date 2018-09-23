import { Component, OnInit } from '@angular/core';
import { BsAuthService } from 'shared/services/bs.auth.service';

@Component({
  selector: 'menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  constructor( public auth: BsAuthService ) { }

  ngOnInit() {
  }

}
