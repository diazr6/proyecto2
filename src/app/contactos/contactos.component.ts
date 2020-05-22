import { Component, OnInit } from '@angular/core';
import { Contacto } from './contacto';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  contactos : any =[
new Contacto(1,'Ricardo'),
new Contacto(2,'juan'),
new Contacto(3,'alfonso'),



  ];

  constructor() { }

  ngOnInit(): void {
  }

}
