import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTwoRoutingModule } from './new-two-routing.module';
import { NewTwoComponent } from './new-two.component';


@NgModule({
  declarations: [
    NewTwoComponent
  ],
  imports: [
    CommonModule,
    NewTwoRoutingModule
  ]
})
export class NewTwoModule { }
