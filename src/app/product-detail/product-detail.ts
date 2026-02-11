import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ProductApi } from '../shared/services/product-api';
import { AsyncPipe } from '@angular/common';
import { ProductCard } from '../shared/components/product-card/product-card';

@Component({
  selector: 'ngs-product-detail',
  imports: [
    AsyncPipe,
    ProductCard
  ],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  readonly #productApi = inject(ProductApi);
  readonly #route = inject(ActivatedRoute);

  protected readonly productDetail$ = this.#route.params.pipe(
    map(params => params['id']),
    switchMap((id) => this.#productApi.getProductDetail(id))
  );
}
