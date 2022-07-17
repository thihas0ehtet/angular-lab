import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path : '', redirectTo: '', pathMatch: 'full' }, 
  { path : '', component: AppComponent }, 
  { path: 'usr', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'dep', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) },
  { path: 'cotus', loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
