import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompComponent } from './addcomp.component';

describe('AddcompComponent', () => {
  let component: AddcompComponent;
  let fixture: ComponentFixture<AddcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
