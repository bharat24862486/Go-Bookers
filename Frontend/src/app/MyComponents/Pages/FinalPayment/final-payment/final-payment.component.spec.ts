import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalPaymentComponent } from './final-payment.component';

describe('FinalPaymentComponent', () => {
  let component: FinalPaymentComponent;
  let fixture: ComponentFixture<FinalPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalPaymentComponent]
    });
    fixture = TestBed.createComponent(FinalPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
