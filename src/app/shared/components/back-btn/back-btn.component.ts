import { Component, OnInit } from '@angular/core';
import { RoutingState } from '../../../core/helpers/RoutingState';
import { BsAuthService } from 'shared/services/bs.auth.service';

@Component({
  selector: 'back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.css']
})
export class BackBtnComponent implements OnInit {

  constructor(public RoutingState:RoutingState, public auth: BsAuthService, ) { }

  ngOnInit() {
  }

}
