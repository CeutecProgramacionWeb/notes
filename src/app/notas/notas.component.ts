import { Component, OnInit } from '@angular/core';
import { Nota } from '../shared/models/nota';
import { NotasMock } from '../shared/notas-mock';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  notas : Array<Nota>;
  selectedNota : Nota;
  categorias : string [];

  constructor() { }

  ngOnInit() {
    this.notas = NotasMock
    this.categorias = ["Categoria 1", "Categoria 2", "Categoria 3"];
  }

  crearNota():void{
    
  }

  onSelect(nota: Nota){
    this.selectedNota = nota;
  }

  onSubmit() : void{
    this.selectedNota = null;
  }
}
