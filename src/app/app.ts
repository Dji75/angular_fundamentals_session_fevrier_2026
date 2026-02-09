import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Header } from './header/header';

enum State {
  Loading = 'loading',
  Success = 'sucess',
  Error = 'error'
}

@Component({
  selector: 'ngs-root',
  imports: [RouterOutlet, ProductList, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly stateEnum: State = State.Loading;

  protected readonly isOnError = true;
  protected readonly isEndOfLifeProducts = false;
  protected readonly color = 'green';
  protected readonly State = State;
}
