import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carosal1Component } from './carosal1.component';

describe('Carosal1Component', () => {
  let component: Carosal1Component;
  let fixture: ComponentFixture<Carosal1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Carosal1Component]
    });
    fixture = TestBed.createComponent(Carosal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
