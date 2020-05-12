import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciOneComponent } from './fibonacci-one.component';

describe('FibonacciOneComponent', () => {
  let component: FibonacciOneComponent;
  let fixture: ComponentFixture<FibonacciOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibonacciOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
