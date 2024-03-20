import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../domain/game';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit{
  @Input('subGame') subGame: Game;
  
  constructor(subGame: Game) {
    this.subGame = subGame;
  } 

  showSubcription() {
    console.log(`The ID is ${this.subGame.id}`)
  }

  ngOnInit(): void {
    
  }
}
