import { Component, inject, input, Input, output } from '@angular/core';
import { RandomColor } from '../shared/directives/random-color';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'ngs-header',
  imports: [
    RandomColor
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly cartService = inject(CartService);

  readonly filterChanged = output<string | null>();
  // @Output() readonly filterChanged = new EventEmitter<string | null>();

  protected filter: string | null = null;

  protected clearFilter(): void {
    this.filter = null;
    this.filterChanged.emit(null);
  }

  protected updateFilter(filter: string): void {
    this.filter = filter;
    this.filterChanged.emit(filter);
  }
}
