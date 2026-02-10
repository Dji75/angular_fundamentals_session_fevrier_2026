import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

interface ProductWithQuantity {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly #cart = signal<ProductWithQuantity[]>([]);

  readonly nbItemsInCart = computed(() => this.#cart().length);

  addToCart(product: Product) {
    const foundProductIndex = this.#cart().findIndex((i) => i.product.id == product.id);
    if (foundProductIndex < 0) {
      this.#cart.set([ ...this.#cart(), { product, quantity: 1 }]);
    } else {
      this.#cart.set([
        ...this.#cart().slice(0, foundProductIndex),
        { product, quantity: this.#cart()[foundProductIndex].quantity + 1 },
        ...this.#cart().slice(foundProductIndex + 1),
      ]);
    }

  }
}
