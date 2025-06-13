import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "../cabecalho/cabecalho.component";


@Component({
  selector: 'app-header',
  imports: [SidebarComponent, RouterOutlet, CabecalhoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
