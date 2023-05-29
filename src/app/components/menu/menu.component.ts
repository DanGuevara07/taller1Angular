import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  currentslide:number = 0;
  currentlink:any = "/mayordeedad";
  links:Array<string> = [
    "/mayordeedad",
    "/primo",
    "/calculadora",

  ]
  updateLink(event: any):void{
    this.currentlink=  this.links[event.to];
    return
  }
}
