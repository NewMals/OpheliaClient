import { Usuario } from './../../../models/usuario.model';
import { Component, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxListModule } from 'devextreme-angular/ui/list';
import { DxContextMenuModule } from 'devextreme-angular/ui/context-menu';

@Component({
  selector: 'app-user-panel',
  templateUrl: 'user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})

export class UserPanelComponent {
  @Input() menuItems: any;
  @Input() menuMode: string;
  usuario: Usuario;

  constructor() {
    this.Inicializar();
  }

  Inicializar(): void {
    this.usuario = new Usuario();
    this.usuario.nombres = 'Michael Andres';
    this.usuario.apellidos = 'Lozano Sanchez';
  }
}

@NgModule({
  imports: [
    DxListModule,
    DxContextMenuModule,
    CommonModule
  ],
  declarations: [ UserPanelComponent ],
  exports: [ UserPanelComponent ]
})
export class UserPanelModule { }
