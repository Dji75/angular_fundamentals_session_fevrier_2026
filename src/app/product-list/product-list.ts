import { Component, computed, inject, input } from '@angular/core';
import { ProductCard } from '../shared/components/product-card/product-card';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ProductApi } from '../shared/services/product-api';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ngs-product-list',
  imports: [
    ProductCard,
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  readonly filter = input.required<string | null>();

  readonly #productApi = inject(ProductApi);

  protected readonly products = toSignal(this.#productApi.getProducts());

  protected filteredProduct = computed(() => {
    const currentProducts = this.products() ?? [];
    const currentFilter = this.filter();
    return currentFilter === null ? currentProducts : (currentProducts.filter((p) => p.category === currentFilter));
  });
}
