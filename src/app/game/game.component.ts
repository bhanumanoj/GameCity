import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

 
  name;
  address;
  amount;
  constructor(private router: Router) { }
   
  buyCard(){
  if(this.amount>=100){
  this.router.navigateByUrl('/proceed/'+this.amount)
   }
  else
   {
  this.name=null;
  this.amount=null;
  this.address=null;
  history.go
   }
   }
  ngOnInit() {
  }

}
