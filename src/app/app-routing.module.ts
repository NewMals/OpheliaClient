import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DxDataGridModule, DxFormModule, DxButtonModule } from 'devextreme-angular';

const routes: Routes = [
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then(m => m.UsuariosModule),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then(m => m.ProductosModule),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'ventasYcompras',
    loadChildren: () => import('./pages/facturas/facturas.module').then(m => m.FacturasModule),
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule, DxButtonModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, PerfilComponent]
})
export class AppRoutingModule { }
