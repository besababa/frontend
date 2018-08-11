import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'long-text',
  templateUrl: './long-text.component.html',
  styleUrls: ['./long-text.component.css'],
  inputs:['text','length']
})
export class LongTextComponent implements OnInit {

  text:string;
  length:number=100;
  showAll:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  taggelShowAll(){

    this.showAll=!this.showAll
  }

  get textSHown(){
   
    return this.text.slice(0, this.length);
  }
  get restText(){

    let text = this.text.slice(this.length,this.text.length);
  
    return text;
  }
  

}
