import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountHomeComponent } from './customer-account-home.component';

describe('CustomerAccountHomeComponent', () => {
  let component: CustomerAccountHomeComponent;
  let fixture: ComponentFixture<CustomerAccountHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAccountHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
