import { Producto } from './../../models/producto.modell';
import { ApiService } from '../../shared/services/api.service';
import { Component } from '@angular/core';
import { obtenerProductos } from '../../../constantes/controllers';
import { environment } from 'src/environments/environment';
import { alert } from 'devextreme/ui/dialog';

@Component({
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [ApiService]
})
export class ProductosComponent {

  productos: Producto[];

  constructor(private apiservice: ApiService) {
    this.Inicializar();
  }

  Inicializar(): void {
    this.GetProductos();
  }

  GetProductos(): void{
    this.apiservice.get(obtenerProductos).subscribe((productos: Producto[]) => {
      this.productos = productos ? productos : new Array<Producto>();
    }, (error: any) => {
      console.log(error);
      alert(error.error ? error.error.error ? error.error.error : environment.error : environment.error, 'Error');
    });
  }

}
