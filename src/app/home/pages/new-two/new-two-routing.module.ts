import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTwoComponent } from './new-two.component';

const routes: Routes = [
  { path: "", component: NewTwoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTwoRoutingModule { }
