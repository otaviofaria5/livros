import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { LivrosComponent } from './componentes/livros/livros.component';
import { AdicionarComponent } from './livros/adicionar/adicionar.component';
import { EditarComponent } from './livros/editar/editar.component';
import { DisponiveisComponent } from './livros/disponiveis/disponiveis.component';
import { ReservadosComponent } from './livros/reservados/reservados.component';
import { AutoresComponent } from './componentes/autores/autores.component';
import { EmprestimosComponent } from './componentes/emprestimos/emprestimos.component';
import { AvaliacoesComponent } from './componentes/avaliacoes/avaliacoes.component';
import { HeaderLivrosComponent } from './livros/header-livros/header-livros.component';
import { CabecalhoComponent } from './shared/cabecalho/cabecalho.component';
import { CadastrarComponent } from './usuario/cadastrar/cadastrar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'cadastrar', component: CadastrarComponent },
    ]
  },
  {
    path: 'header',
    component: HeaderComponent,
    children: [
      { path: 'livros', component: LivrosComponent },
      { path: 'adicionar', component: AdicionarComponent },
      { path: 'editar/:id', component: EditarComponent },
      { path: 'disponivel', component: DisponiveisComponent },
      { path: 'reservados', component: ReservadosComponent },
      { path: 'autores', component: AutoresComponent },
      { path: 'emprestimos', component: EmprestimosComponent },
      { path: 'avaliacoes', component: AvaliacoesComponent },
      { path: 'sidebar', component: SidebarComponent },
      { path: 'header-livros', component: HeaderLivrosComponent },
      { path: 'cabecalho', component: CabecalhoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}