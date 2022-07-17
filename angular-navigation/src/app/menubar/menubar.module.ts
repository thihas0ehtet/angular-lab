import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarRoutingModule } from './menubar-routing.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenubarRoutingModule
  ]
})
export class MenubarModule { }
