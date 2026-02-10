import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList } from './product-list';

describe('ProductList', () => {
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have product card', () => {
    // const element = fixture.debugElement.query(By.css("ngs-product-card"));
    // expect(element).toBeDefined();
    const element = fixture.nativeElement as HTMLElement
    expect(element.querySelector('ngs-product-card')).toBeTruthy();
    expect(element.querySelector('ngs-product-card')).not.toBeNull();
  });
});
