import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentbComponent } from './departmentb.component';

describe('DepartmentbComponent', () => {
  let component: DepartmentbComponent;
  let fixture: ComponentFixture<DepartmentbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
