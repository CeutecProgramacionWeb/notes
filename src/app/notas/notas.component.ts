import { Component, OnInit } from '@angular/core';
import { Nota } from '../shared/models/nota';
import { NotasService } from '../shared/services/notas.service';
import { Categorias } from '../shared/models/categorias';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  notas : Array<Nota>;
  selectedNota : Nota;
  categorias : Array<Categorias>;
  crear: boolean;

  constructor(public notasService : NotasService) {
    this.notasService = notasService;
    this.crear = true;
   }

  ngOnInit() { 
    this.notasService.getNotas()
    .subscribe((data : Array<Nota>) => {
      this.notas = data;
    },
    (error : any ) => {
      console.log("Error " + error);
    });
    this.notasService.getCategorias()
    .subscribe((data: Array<Categorias>) => {
        this.categorias = data;
    },
    (error : any ) => {
      console.log("Error " + error);
    });
  }

  crearNota():void{
    this.crear = false;
  }

  onSelect(nota: Nota){
    this.selectedNota = nota;
  }

  onSubmit() : void{
    this.notasService.modificarNota(this.selectedNota)
    this.selectedNota = null;  
    this.notasService.getNotas()
    .subscribe((data : Array<Nota>) => {
      this.notas = data;
    },
    (error : any ) => {
      console.log("Error " + error);
    });
  }
}
