import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarsPage } from '../stars/stars.page';
import { IonicModule } from '@ionic/angular';

import { PerfilServicoPageRoutingModule } from './perfil-servico-routing.module';

import { PerfilServicoPage } from './perfil-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilServicoPageRoutingModule
  ],
  declarations: [PerfilServicoPage, StarsPage]
})
export class PerfilServicoPageModule {}
