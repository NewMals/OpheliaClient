import { ApiService } from '../../shared/services/api.service';
import { Usuario } from '../../models/usuario.model';
import { Component, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { obtenerClientes, obtenerProveedores } from '../../../constantes/controllers';
import { environment } from 'src/environments/environment';
import { alert } from 'devextreme/ui/dialog';

@Component({
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [ApiService]
})
export class UsuariosComponent implements AfterViewInit {

  @ViewChild('nuevoUsuario') nuevoUsuario: ElementRef;
  @ViewChild('buttons') buttons: ElementRef;
  usuarios: Usuario[];

  constructor(private apiservice: ApiService) {
    this.Inicializar();
  }

  ngAfterViewInit(): void {
    this.nuevoUsuario.nativeElement.style.display = 'none';
  }

  Inicializar(): void {
    this.GetClientes();
  }

  GetClientes(): void{
    this.apiservice.get(obtenerClientes).subscribe((clientes: Usuario[]) => {
      this.usuarios = clientes ? clientes : new Array<Usuario>();
    }, (error: any) => {
      console.log(error);
      alert(error.error ? error.error.error ? error.error.error : environment.error : environment.error, 'Error');
    });
  }
  GetProveedores(): void{
    this.apiservice.get(obtenerProveedores).subscribe((proveedores: Usuario[]) => {
      this.usuarios = proveedores ? proveedores : new Array<Usuario>();
    }, (error: any) => {
      console.log(error);
      alert(error.error ? error.error.error ? error.error.error : environment.error : environment.error, 'Error');
    });
  }

  NuevoUsuario(): void{
    this.nuevoUsuario.nativeElement.style.display = 'block';
    this.buttons.nativeElement.style.display = 'none';
  }

  Regresar(): void{
    this.nuevoUsuario.nativeElement.style.display = 'none';
    this.buttons.nativeElement.style.display = 'block';
    this.GetClientes();
  }
}
