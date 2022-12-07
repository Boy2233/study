import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFiveComponent } from './new-five.component';

const routes: Routes = [
  {
    path: '',
    component: NewFiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewFiveRoutingModule { }
