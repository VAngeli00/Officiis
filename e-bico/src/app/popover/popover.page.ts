import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  list: any = [
    "Mais baratos primeiro",
    "Mais caros primeiro",
    "Mais próximos de mim"
  ]
  constructor() { }

  ngOnInit() {
  }

  dismiss(item:string){
    
  }

}
