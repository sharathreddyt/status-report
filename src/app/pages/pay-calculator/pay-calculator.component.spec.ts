import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCalculatorComponent } from './pay-calculator.component';

describe('PayCalculatorComponent', () => {
  let component: PayCalculatorComponent;
  let fixture: ComponentFixture<PayCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
