import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropCompComponent } from './drag-drop-comp.component';

describe('DragDropCompComponent', () => {
  let component: DragDropCompComponent;
  let fixture: ComponentFixture<DragDropCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
