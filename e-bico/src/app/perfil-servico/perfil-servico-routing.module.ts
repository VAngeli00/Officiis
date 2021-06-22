import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilServicoPage } from './perfil-servico.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilServicoPageRoutingModule {}
