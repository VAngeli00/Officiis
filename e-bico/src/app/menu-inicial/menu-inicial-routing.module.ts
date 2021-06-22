import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuInicialPage } from './menu-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: MenuInicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuInicialPageRoutingModule {}
