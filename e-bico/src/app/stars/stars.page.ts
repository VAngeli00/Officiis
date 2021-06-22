import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.page.html',
  styleUrls: ['./stars.page.scss'],
})
export class StarsPage implements OnInit {

  @Input() starId;
  @Input() rating;

  @Output() starEnter: EventEmitter<number> = new EventEmitter();
  @Output() starLeave: EventEmitter<number> = new EventEmitter();
  @Output() starClicked: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onStarEnter(){
    this.starEnter.emit(this.starId);
  }

  onStarLeave(){
    this.starLeave.emit();
  }

  onStarClicked(){
    this.starClicked.emit(this.starId);
  }

}
