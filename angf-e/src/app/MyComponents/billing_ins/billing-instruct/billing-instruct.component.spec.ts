import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingInstructComponent } from './billing-instruct.component';

describe('BillingInstructComponent', () => {
  let component: BillingInstructComponent;
  let fixture: ComponentFixture<BillingInstructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingInstructComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingInstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
