import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ApiRequest';

  constructor(private usuarioService: UsuarioService){}

  obterTodosUsuarios(){
    this.usuarioService.obterTodos()
      .then(usuarios => console.log(usuarios))
      .catch(error => console.error(error));
      
  }

}
