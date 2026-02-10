import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ProductList } from './product-list/product-list';
import { RandomColor } from './shared/directives/random-color';
import { Product } from './shared/models/product';

enum State {
  Loading = 'loading',
  Success = 'sucess',
  Error = 'error'
}

@Component({
  selector: 'ngs-root',
  imports: [RouterOutlet, Header, ProductList, RandomColor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly stateEnum: State = State.Loading;

  protected readonly isOnError = true;
  protected readonly isEndOfLifeProducts = false;
  protected readonly color = 'green';
  protected readonly State = State;

  protected filter: string | null = null;

  cart: Product[] = [];

  protected setFilter(filter: string | null) {
    this.filter = filter;
  }

  protected addItemToCart(product: Product): void {
    // this.cart = [...this.cart, product];
    this.cart.push(product);
  }
}
