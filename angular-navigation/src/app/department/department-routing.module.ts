import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentAComponent } from './department-a/department-a.component';
import { DepartmentbComponent } from './departmentb/departmentb.component';
const routes: Routes = [
  { path : 'depA', component: DepartmentAComponent },
  { path : 'depB', component: DepartmentbComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
