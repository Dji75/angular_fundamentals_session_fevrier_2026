import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
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

  getProductDetail(id: string): Observable<Product> {
    // TODO we will suppose id always exists but in reality we would handle fail cases
    return this.#http.get<Product[]>(`${environment.apiUrl}/products`, { params: { id } }).pipe(map(p => p[0]));
  }
}
