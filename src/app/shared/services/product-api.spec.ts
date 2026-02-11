import { TestBed } from '@angular/core/testing';

import { ProductApi } from './product-api';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('ProductApi', () => {
  let service: ProductApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductApi, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(ProductApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get products', () => {
    service.getProducts().subscribe(products => {
      expect(products.length).toBe(2);
    });
    const req = httpMock.expectOne('http://localhost:3001/products');
    expect(req.request.method).toBe('GET');
    req.flush([{id: 1}, {id: 2}]);
  });
});
