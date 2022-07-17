import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    ContactusRoutingModule
  ]
})
export class ContactusModule { }
