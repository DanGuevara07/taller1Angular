import { Component } from '@angular/core';

@Component({
  selector: 'app-appprimo',
  templateUrl: './appprimo.component.html',
  styleUrls: ['./appprimo.component.css']
})
export class AppprimoComponent {
  invalidChars:Array<string> = [
    "-",
    "+",
    "e",
    "."
  ]
  isPrimo:number = 0  

  limitKey(event:any):void{
    if (this.invalidChars.includes(event.key)) {
      event.preventDefault();
    }
  }
  checkPrimo(event:any):void{
    event.target.value === "" ? this.isPrimo=0 :
    this.esPrimo(event.target.value) ? this.isPrimo=1 : this.isPrimo=2
    return
  }
  esPrimo(x:number){
    if(x == 1) return false;
    if(x == 0) return false;
    for(let i=2; i<=x/2; i++){
        if(x % i === 0) return false;
    }
    return true;
  }
}
