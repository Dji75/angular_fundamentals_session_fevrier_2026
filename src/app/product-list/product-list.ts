import { Component } from '@angular/core';
import { ProductCard } from '../shared/components/product-card/product-card';

@Component({
  selector: 'ngs-product-list',
  imports: [
    ProductCard
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

}
