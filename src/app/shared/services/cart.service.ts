import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly #cart = signal<Product[]>([]);

  readonly nbItemsInCart = computed(() => this.#cart().length);

  addToCart(product: Product) {
    this.#cart.set([...this.#cart(), product]);
  }
}
