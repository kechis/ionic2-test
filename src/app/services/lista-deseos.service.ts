import { Injectable } from '@angular/core';
import {Lista} from '../classes/lista';

@Injectable()
export class ListaDeseosService {

  listas: Lista[] = [];
  constructor() {
    let lista1 = new Lista('Compras supermercado');
    let lista2 = new Lista('Compras primor');
    let lista3 = new Lista('Juegos');

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);

  }
}
