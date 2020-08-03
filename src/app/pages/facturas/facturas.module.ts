import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FacturasComponent } from './facturas.component';

import { NgModule } from '@angular/core';
import { DxDataGridModule, DxFormModule, DxButtonModule, DxTextBoxModule, DxSelectBoxModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: FacturasComponent},
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
    DxSelectBoxModule
  ],
  declarations: [ FacturasComponent ],
  exports: [  FacturasComponent ]
})
export class FacturasModule { }
