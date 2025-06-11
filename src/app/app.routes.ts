import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CadastrarComponent } from './shared/cadastrar/cadastrar.component';

export const routes: Routes = [

    {
      path:'',
      component: HomeComponent,

    },
    {
      path:'usuarios',
      component: UsuariosComponent
    },
    {
      path: 'menu',
      component: MenuComponent
    },
    {
      path: 'cadastrar',
      component: CadastrarComponent
    }

  ];
