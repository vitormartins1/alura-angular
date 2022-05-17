import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alura-angular01';

  constructor(private service: TransferenciaService) {

  }

  transferir($event) {
    console.log($event);
    this.service.adicionar($event);
  }
}
