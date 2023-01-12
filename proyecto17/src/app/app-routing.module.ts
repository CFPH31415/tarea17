import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakComponent } from './pages/break/break.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent },
  {path:"nosotros", component:NosotrosComponent },
  {path:"contacto", component:ContactoComponent },
  {path:"404", component:BreakComponent},
  {path:"**", redirectTo:"404", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
