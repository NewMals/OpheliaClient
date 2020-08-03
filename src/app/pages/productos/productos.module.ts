import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';

import { NgModule } from '@angular/core';
import { DxDataGridModule, DxFormModule, DxButtonModule, DxTextBoxModule, DxSelectBoxModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProductosComponent},
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
  declarations: [ ProductosComponent ],
  exports: [  ProductosComponent ]
})
export class ProductosModule { }
