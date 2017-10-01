
import {ListaItem} from './lista-item';

export class Lista{
  nombre:string;
  items:ListaItem[];
  terminada:boolean;

  constructor(nombre:string) {
    this.nombre = nombre;
    this.terminada = false;
  }

}
