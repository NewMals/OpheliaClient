import { Factura } from './../../models/factura.model';
import { ApiService } from '../../shared/services/api.service';
import { Component } from '@angular/core';
import { obtenerFacturasVenta, obtenerFacturasCompra } from '../../../constantes/controllers';
import { environment } from 'src/environments/environment';
import { alert } from 'devextreme/ui/dialog';

@Component({
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss'],
  providers: [ApiService]
})
export class FacturasComponent  {
  facturas: Factura[];

  constructor(private apiservice: ApiService) {
    this.Inicializar();
  }

  Inicializar(): void {
    this.GetVentas();
  }

  GetVentas(): void{
    this.apiservice.get(obtenerFacturasVenta).subscribe((ventas: Factura[]) => {
      this.facturas = ventas ? ventas : new Array<Factura>();
    }, (error: any) => {
      alert(error.error.error ? error.error.error : environment.error, 'Error');
    });
  }

  GetCompras(): void{
    this.apiservice.get(obtenerFacturasCompra).subscribe((compras: Factura[]) => {
      this.facturas = compras ? compras : new Array<Factura>();
    }, (error: any) => {
      console.log(error);
      alert(error.error ? error.error.error ? error.error.error : environment.error : environment.error, 'Error');
    });
  }
}
