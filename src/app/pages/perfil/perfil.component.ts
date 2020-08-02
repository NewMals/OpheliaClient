import { Perfil } from './../../models/perfil.model';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'perfil.component.html',
  styleUrls: [ './perfil.component.scss' ]
})

export class PerfilComponent {
  perfil:  Perfil;
  colCountByScreen: object;

  constructor() {
    this.Inicializar();
  }

  Inicializar(): void {
    this.perfil = {
      Nombres: 'Michael Andres',
      Apellidos: 'Lozano Sanchez',
      Profesion: 'Ingenerio de sistemas',
      FechaNacimiento : new Date('1992/10/31'),
      Celular: 3006382549,
      Direccion: 'Calle 69 sur # 9b 28'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }

}
