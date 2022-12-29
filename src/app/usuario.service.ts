import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_PATH } from 'src/environments/environment';
import { IUsuario } from './IUsuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(){
    return this.httpClient.get<IUsuario[]>('https://jsonplaceholder.typicode.com/users').toPromise();
  }
}
