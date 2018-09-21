import { Component, OnInit } from '@angular/core';
import { RoutingState } from '../../../core/helpers/RoutingState';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.css']
})
export class BackBtnComponent implements OnInit {

  constructor(public RoutingState:RoutingState, public auth: AuthService, ) { }

  ngOnInit() {
  }

}
