import { Component, Input } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPricesComponent } from "./card-prices/card-prices.component";

@Component({
  selector: 'app-cards',
  imports: [CardLabelComponent, CardPricesComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  constructor() { }

  @Input()
  gameCover:string = " "

  @Input()
  gameLabel = " ";

  @Input()
  gameType: string = "Digital PS4";

  @Input()
  gamePrice: string = "299,90";


}
