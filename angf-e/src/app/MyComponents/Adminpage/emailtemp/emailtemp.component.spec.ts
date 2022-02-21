import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailtempComponent } from './emailtemp.component';

describe('EmailtempComponent', () => {
  let component: EmailtempComponent;
  let fixture: ComponentFixture<EmailtempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailtempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
