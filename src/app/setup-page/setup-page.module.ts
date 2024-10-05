import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetupPagePageRoutingModule } from './setup-page-routing.module';

import { SetupPagePage } from './setup-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetupPagePageRoutingModule
  ],
  declarations: [SetupPagePage]
})
export class SetupPagePageModule {}
