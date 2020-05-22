import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// se agrega modulo con import 
import{ ContactosComponent} from './contactos/contactos.component'
import { AlumnosComponent } from './alumnos/alumnos.component'

const routes: Routes = [
{path:'contactos' ,component: ContactosComponent },
{path: 'alumnos' ,component: AlumnosComponent }




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
