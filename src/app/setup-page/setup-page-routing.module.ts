import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupPagePage } from './setup-page.page';

const routes: Routes = [
  {
    path: '',
    component: SetupPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetupPagePageRoutingModule {}
