import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewOneComponent } from './new-one.component';

const routes: Routes = [{
  path: '',
  component: NewOneComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewOneRoutingModule { }
