import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alura-angular01';

  destino: number;
  valor: number;

  transferir($event) {
    console.log($event);
    this.destino = $event.destino;
    this.valor = $event.valor;
  }
}
