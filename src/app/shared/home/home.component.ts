import { Component } from '@angular/core';
import { UsuariosComponent } from '../../componentes/usuarios/usuarios.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsuariosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}



