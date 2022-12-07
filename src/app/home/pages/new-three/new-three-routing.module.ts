import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewThreeComponent } from './new-three.component';

const routes: Routes = [
  { path: "", component: NewThreeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewThreeRoutingModule { }
