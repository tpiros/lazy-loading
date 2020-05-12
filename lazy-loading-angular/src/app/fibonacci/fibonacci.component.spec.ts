import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciComponent } from './fibonacci.component';

describe('FibonacciComponent', () => {
  let component: FibonacciComponent;
  let fixture: ComponentFixture<FibonacciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibonacciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
