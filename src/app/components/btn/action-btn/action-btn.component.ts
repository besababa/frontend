import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'action-btn',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.css'],
  inputs:['text','width']
})
export class ActionBtnComponent {

  width:string;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  onClick(){
    this.change.emit()
  }

}
