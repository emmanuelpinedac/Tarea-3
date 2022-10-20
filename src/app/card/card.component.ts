import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  hobbies: Array<string> = [
    'Jugar con la pelota',
    'dormir',
    'comer',
    'Saltar en el Sillon',
    'Perseguir gatos',
  ];
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
