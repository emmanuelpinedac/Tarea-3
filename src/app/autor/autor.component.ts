import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css'],
})
export class AutorComponent implements OnInit {
  estudios: Array<string> = [
    '7 años Estudio',
    '2 DOGtorados',
    'Muchas noches de Perro',
  ];

  mostrar = true;

  ocultarYmostrarFoto() {
    if (this.mostrar == true) {
      this.mostrar = false;
    }
    else{
      this.mostrar=true
    }
  }

  edad = 17;

  incrementarEdad() {
    this.edad += 1;
  }
  disminuirEdad() {
    this.edad -= 1;
  }
  constructor() {}

  ngOnInit(): void {}
}
