import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMovieCinemaComponent } from './single-movie-cinema.component';

describe('SingleMovieCinemaComponent', () => {
  let component: SingleMovieCinemaComponent;
  let fixture: ComponentFixture<SingleMovieCinemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleMovieCinemaComponent]
    });
    fixture = TestBed.createComponent(SingleMovieCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
