import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { Login } from './login/login';

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
        title: 'Produits',
      },
      {
        path: ':id',
        component: ProductDetail,
        title: 'Product detail'
      },
    ],
  },
  {
    path: 'login',
    component: Login,
    title: 'Login'
  },
  { path: '**' , redirectTo: '', pathMatch: 'full' }
];
