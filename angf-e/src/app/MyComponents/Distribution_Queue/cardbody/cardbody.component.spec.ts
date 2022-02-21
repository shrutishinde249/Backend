import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbodyComponent } from './cardbody.component';

describe('CardbodyComponent', () => {
  let component: CardbodyComponent;
  let fixture: ComponentFixture<CardbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
