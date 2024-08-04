import { Component } from '@angular/core';

export enum UserStatusEnum {
    ATIVO = 1,
    INATIVO = 2,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = {
    nome: 'Felipe',
    idade: 37,
    status: 3,
  };
}
