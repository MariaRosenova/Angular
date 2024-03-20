import { Component} from '@angular/core';
import { Game } from '../domain/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  
  games: Array<Game>;
  isShown: boolean = false;
  constructor() {
    this.games = [{id: 1, title: "First Game", image: "https://i.pinimg.com/236x/8a/fa/12/8afa123a146c083b0bb02b34e71aa199.jpg"}] 
  }

  showContacts() {
    this.isShown = true;
  }

  showName(name: string) {
    console.log(name);
  }
}
