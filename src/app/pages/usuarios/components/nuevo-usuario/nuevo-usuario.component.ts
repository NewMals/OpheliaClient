import { Respuesta } from './../../../../models/respuesta.model';
import { environment } from 'src/environments/environment';
import { obtenerUsuariosPorIdentificacion, obtenerRoles, crearOModificarUsuario } from './../../../../../constantes/controllers';
import { Component, Output, EventEmitter } from '@angular/core';
import { Usuario, UsuariosRoles } from 'src/app/models/usuario.model';
import { ApiService } from 'src/app/shared/services';
import { alert } from 'devextreme/ui/dialog';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent {
  usuario: Usuario;
  roles: UsuariosRoles[];
  habilitar: boolean;
  @Output() cerrar = new EventEmitter<boolean>();

  constructor(private apiservice: ApiService) {
    this.Inicializar();
  }

  Inicializar(): void {
    this.usuario = new Usuario();
    this.habilitar = true;
    this.GetRoles();
  }

  GetRoles(): void{
    this.apiservice.get(obtenerRoles).subscribe((roles: UsuariosRoles[]) =>{
      this.roles = roles;
      this.usuario.rol = this.roles[0].id;
    }, (error: any) => {
      console.log(error);
      alert(error.error ? error.error.error ? error.error.error : environment.error : environment.error, 'Error');
    });
  }

  ConsultarUsuario(): void {
    this.apiservice.get(`${obtenerUsuariosPorIdentificacion}?identificacion=${this.usuario.identificacion}`)
    .subscribe((cliente: Usuario) => {
      if (cliente !== null) {
        this.usuario = cliente;
        this.habilitar = false;
      } else {
        this.habilitar = true;
      }
    }, (error: any) =>{
      console.log(error);
      alert(error.error ? error.error.error ? error.error.error : environment.error : environment.error, 'Error');
    });
  }

  CrearOModificarUsuario(): void {
    this.apiservice.post(crearOModificarUsuario, this.usuario).subscribe((respuesta: Respuesta) => {
      alert(respuesta.mensaje, 'Ejecución exitosa');
      this.Regresar();
    }, (error: any) => {
      console.log(error);
      alert(error.error ? error.error.error ? error.error.error : environment.error : environment.error, 'Error');
    });
  }

  RolSeleccionado(e: any): void {
    this.usuario.rol = e.value;
  }

  Regresar(): void{
    this.usuario = new Usuario();
    this.usuario.rol = this.roles[0].id;
    this.habilitar = true;
    this.cerrar.emit(true);
  }
}
