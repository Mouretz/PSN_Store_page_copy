import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-prices',
  imports: [],
  templateUrl: './card-prices.component.html',
  styleUrl: './card-prices.component.css'
})
export class CardPricesComponent {

  @Input()
  gameType: string = "Digital PS4";

  @Input()
  gamePrice: string = "299,90";

  constructor() { }
}
