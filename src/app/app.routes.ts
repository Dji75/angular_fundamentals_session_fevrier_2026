import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [
  {
    path: 'cart',
    component: Cart,
    title: 'Panier'
  },
  {
    path: '',
    component: ProductList,
    title: 'Products'
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductList,
        title: 'Produits'
      },
      {
        path: ':id',
        component: ProductDetail,
        title: 'Product detail'
      },
    ],
  },
  { path: '**' , redirectTo: '', pathMatch: 'full' }
];
