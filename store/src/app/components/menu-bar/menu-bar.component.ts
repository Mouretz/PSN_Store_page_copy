import { Component } from '@angular/core';
import { MenuBarItemsComponent } from './menu-bar-items/menu-bar-items.component'; // Importe o MenuBarItemsComponent
import { MenuBarLogoComponent } from './menu-bar-logo/menu-bar-logo.component'; // Importe o MenuBarLogoComponent

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenuBarItemsComponent, MenuBarLogoComponent], // Adicione o componente importado aqui
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  constructor() { }
}
