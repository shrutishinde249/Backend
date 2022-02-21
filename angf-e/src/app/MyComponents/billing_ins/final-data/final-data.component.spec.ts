import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDataComponent } from './final-data.component';

describe('FinalDataComponent', () => {
  let component: FinalDataComponent;
  let fixture: ComponentFixture<FinalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
