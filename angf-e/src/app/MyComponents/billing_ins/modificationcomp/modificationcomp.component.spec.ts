import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationcompComponent } from './modificationcomp.component';

describe('ModificationcompComponent', () => {
  let component: ModificationcompComponent;
  let fixture: ComponentFixture<ModificationcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
