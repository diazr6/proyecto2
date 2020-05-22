import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// se agrega modulo con import 
import{ ContactosComponent} from './contactos/contactos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AlumnosComponent } from './alumnos/alumnos.component';


const routes: Routes = [
{path:'contactos' ,component: ContactosComponent },
{path: 'alumnos' ,component: AlumnosComponent },
{path: 'servicios' ,component: ServiciosComponent },





];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
