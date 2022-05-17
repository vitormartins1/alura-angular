import { Component } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alura-angular01';
  transferencias: any[] = [];

  transferir($event) {
    console.log($event);
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push(transferencia);
  }
}
