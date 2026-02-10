import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'ngs-product-card',
  imports: [
    CurrencyPipe,
    DecimalPipe,
    TruncatePipe
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  // template: `
  // <p> product works</p>
  // `,
  // styles: `
  //   :host {
  //     display: block;
  //   }
  // `
})
export class ProductCard {
  // protected readonly product: Product = {
  //   brand: '',
  //   id: 1,
  //   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   price: 109.95,
  //   description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //   category: "men's clothing",
  //   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   rating: {
  //     rate: 3.9,
  //     count: 120
  //   }
  // };
  readonly product = input.required<Product>();
  // @Input({ required: true }) readonly product: Product;

  readonly addToCart = output<Product>();


  protected readonly currencySymbol = Intl.NumberFormat('en', {style:'currency', currency: 'USD'}).formatToParts().find(part => part.type === 'currency')?.value;

  // protected add(): void {
  //   this.addToCart.emit(this.product());
  // }
}
