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
  readonly #cart = signal<Record<Product['id'], ProductWithQuantity>>({});

  readonly nbItemsInCart = computed(() => Object.entries(this.#cart()).length);

  addToCart(product: Product) {
    this.#cart.set({
      ...this.#cart(),
      [product.id]: { product, quantity: (this.#cart()[product.id]?.quantity ?? 0) + 1 },
    });
  }
}
