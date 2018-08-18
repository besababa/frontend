import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'read-more',
  templateUrl: './long-text.component.html',
  styleUrls: ['./long-text.component.css']
  
})

export class ReadMoreComponent {
  show=false

  taggleShow(){
    this.show= !this.show;
    console.log(this.show)
  }

}
