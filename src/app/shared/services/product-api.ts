import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductApi {
  readonly #http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    // works but legacy return this.#http.get<Product[]>(environment.apiUrl + '/products');
    return this.#http.get<Product[]>(`${environment.apiUrl}/products`);
  }
}
