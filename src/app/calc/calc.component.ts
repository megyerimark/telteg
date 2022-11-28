 /*

* Author: Megyeri Márk Máté
* Copyright: 2022, Megyeri Márk Máté
* Group: Szoft II/N
* Date: 2022.11.28
* Github: https://github.com/megyerimark/
* Licenc: GNU GPL
*/
 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  title = 'Télteg';
  aSide !:number;
  bSide !:number;
  terulet !:number;
  areaShow = false;
  

  calcArea():void{
    if (this.checValidation()){
      console.log('Működik');
      this.terulet = 2*(this.aSide*this.bSide)
      this.aSide = 0;
      this.bSide = 0;
      this.areaShow = true
    }else{
     alert ("Írj be egy számot ami nagyobb , mint 0 vagy EGYES!")
    }
  }



  checValidation():boolean{
    let valid = true;
    if(this.aSide <= 0){
      valid = false ;
    }
    if(this.bSide <= 0){
      valid = false
    }
    return valid;
  }
  hideArea():void{
    this.areaShow = false;
  }
  Area():void{
    this.areaShow = false;
  }




  constructor() { }

  ngOnInit(): void {
  }

}
