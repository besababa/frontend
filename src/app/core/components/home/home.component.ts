import { Component, OnInit } from '@angular/core';
import { BsAuthService } from 'shared/services/bs.auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: BsAuthService) { }

  ngOnInit() {
  }

}
