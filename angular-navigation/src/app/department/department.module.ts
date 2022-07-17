import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentAComponent } from './department-a/department-a.component';
import { DepartmentbComponent } from './departmentb/departmentb.component';


@NgModule({
  declarations: [
    DepartmentAComponent,
    DepartmentbComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
