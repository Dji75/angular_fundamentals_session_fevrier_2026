import { Component, inject, output } from '@angular/core';
import { RandomColor } from '../shared/directives/random-color';
import { CartService } from '../shared/services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'ngs-header',
  imports: [
    RandomColor,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly cartService = inject(CartService);
}
