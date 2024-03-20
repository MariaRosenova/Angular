import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
  imgUrl = 'img should be here';
  badCurly = 'bad-curly';
  handleClick(event: Event) {
    console.log('clicked', event)
  }

  @Input('color') colorValue = 'white';
}
