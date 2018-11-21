import { Injectable } from '@angular/core';
import { Nota } from '../models/nota';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  private url : string = "http://localhost:3000";

  constructor(private client : HttpClient) {
    this.client = client;
   }

  getNotas(){
    return this.client.get(this.url + "/notas");
  }

  getCategorias(){
    return this.client.get(this.url+ '/categorias');
  }

  modificarNota(nota : Nota){
    this.client.put(this.url + "/notas/" + nota.id, nota)
    .subscribe(data => {
    });
  }
}
