import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contatore',
  templateUrl: './contatore.component.html',
  styleUrls: ['./contatore.component.css']
})
export class ContatoreComponent implements OnInit {

  @Input() etichetta: string = "";
  @Input() step: number = 0;
  @Input() totale: number = 0;

  @Output() cambiato: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  conta() {
    console.log("Siamo in conta", this.step, this.totale);
    this.totale += this.step;
    this.cambiato.emit(this.totale);
  }
}
