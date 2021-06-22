import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuInicialPageRoutingModule } from './menu-inicial-routing.module';

import { MenuInicialPage } from './menu-inicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuInicialPageRoutingModule
  ],
  declarations: [MenuInicialPage]
})
export class MenuInicialPageModule {}

