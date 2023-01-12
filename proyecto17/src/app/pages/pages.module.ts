import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakComponent } from './break/break.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';



@NgModule({
  declarations: [
    BreakComponent,
    ContactoComponent,
    HomeComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreakComponent,
    ContactoComponent,
    HomeComponent,
    NosotrosComponent
  ]
})
export class PagesModule { }
