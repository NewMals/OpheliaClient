import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './usuarios.component';

import { NgModule } from '@angular/core';
import { DxDataGridModule, DxFormModule, DxButtonModule, DxTextBoxModule, DxSelectBoxModule, DxDateBoxModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: UsuariosComponent},
  { path: 'nuevoUsuario', component: NuevoUsuarioComponent},
 ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    DxDataGridModule,
    DxFormModule,
    DxButtonModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxDateBoxModule
  ],
  declarations: [ UsuariosComponent,
    NuevoUsuarioComponent ],
  exports: [  UsuariosComponent ]
})
export class UsuariosModule { }
