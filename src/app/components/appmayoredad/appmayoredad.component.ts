import { Component } from '@angular/core';

@Component({
  selector: 'app-appmayoredad',
  templateUrl: './appmayoredad.component.html',
  styleUrls: ['./appmayoredad.component.css']
})
export class AppmayoredadComponent {
  invalidChars:Array<string> = [
    "-",
    "+",
    "e",
    "."
  ]
  isAdult:number = 0  

  limitKey(event:any):void{
    if (this.invalidChars.includes(event.key)) {
      event.preventDefault();
    }
  }
  limitMax(event:any):void{
    if(event.target.value > 150){
      event.target.value = '150';
    }
    return
  }
  checkAge(event:any):void{
    event.target.value === "" ? this.isAdult=0 :
    event.target.value >= 18 ? this.isAdult=1 : this.isAdult=2
    return
  }
}
