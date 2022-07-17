import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAComponent } from './department-a.component';

describe('DepartmentAComponent', () => {
  let component: DepartmentAComponent;
  let fixture: ComponentFixture<DepartmentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
