import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewFourRoutingModule } from './new-four-routing.module';
import { NewFourComponent } from './new-four.component';


@NgModule({
  declarations: [
    NewFourComponent
  ],
  imports: [
    CommonModule,
    NewFourRoutingModule
  ]
})
export class NewFourModule { }
