import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsFloatingFooterComponent } from './product-details-floating-footer.component';

describe('ProductDetailsFloatingFooterComponent', () => {
  let component: ProductDetailsFloatingFooterComponent;
  let fixture: ComponentFixture<ProductDetailsFloatingFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsFloatingFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsFloatingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
