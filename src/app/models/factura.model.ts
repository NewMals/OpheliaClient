import { Producto } from './producto.modell';
import { Usuario } from './usuario.model';
export class Factura {
  id: number;
  producto: Producto;
  usuario: Usuario;
  cantidad: number;
  fecha: Date;
  valorUnitario: number;
  valorTotal: number;
}
