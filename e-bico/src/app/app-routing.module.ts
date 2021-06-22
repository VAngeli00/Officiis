import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { DataResolverService } from './resolver/data-resolver.service';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'menu-inicial',
    loadChildren: () => import('./menu-inicial/menu-inicial.module').then( m => m.MenuInicialPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil-servico',
    loadChildren: () => import('./perfil-servico/perfil-servico.module').then( m => m.PerfilServicoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil-servico/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./perfil-servico/perfil-servico.module').then( m => m.PerfilServicoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'meu-perfil',
    loadChildren: () => import('./meu-perfil/meu-perfil.module').then( m => m.MeuPerfilPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'popover',
    loadChildren: () => import('./popover/popover.module').then( m => m.PopoverPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule),
    canActivate: [AuthGuard]
  },  {
    path: 'stars',
    loadChildren: () => import('./stars/stars.module').then( m => m.StarsPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
