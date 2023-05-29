import { Component, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {
  invalidChars:Array<string> = [
    "e",
    "+",
    "-"
  ]
  isPrimo:number = 0 
  myNumber:string = ""
  operacion?:string
  resultado?:string
  isOperating:boolean = false
  
  wiperesult(){
    if(!this.isOperating){
      this.resultado=""
    }
  }
  operador(signo:string):void{
    if(this.myNumber !== "" && !this.isOperating){
      this.resultado ? this.operacion= this.resultado+signo:this.operacion=this.myNumber+signo
      this.myNumber=""
      this.isOperating=true
    }
    return
  }
  operadorc(){
    this.isOperating=false
    this.myNumber=""
    this.operacion=""
    this.resultado=""
  }
  calcular(){
    if(this.isOperating){
      this.operacion += this.myNumber 
      this.myNumber = ""
      this.resultado= eval(this.operacion + "")
      this.operacion += " = "+this.resultado
      this.myNumber = this.operacion+""
      this.operacion = ""
      this.isOperating=false
    }
  }
  limitKey(event:any):void{
    if (this.invalidChars.includes(event.key)) {
      event.preventDefault();
    }
    if ("-".includes(event.key)) {
      this.operador("-")
    }
    if ("+".includes(event.key)) {
      this.operador("+")
    }
    if ("*".includes(event.key)) {
      this.operador("*")
    }
    if ("/".includes(event.key)) {
      this.operador("/")
    }
    if ("Enter".includes(event.key)) {
      this.calcular()
    }
    if ("c".includes(event.key)) {
      this.operadorc()
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
