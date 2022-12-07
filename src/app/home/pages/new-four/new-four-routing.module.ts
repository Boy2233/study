import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFourComponent } from './new-four.component';

const routes: Routes = [
  { path: '', component: NewFourComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewFourRoutingModule { }
