import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewFiveRoutingModule } from './new-five-routing.module';
import { NewFiveComponent } from './new-five.component';


@NgModule({
  declarations: [
    NewFiveComponent
  ],

  imports: [
    CommonModule,
    NewFiveRoutingModule
  ]
})
export class NewFiveModule { }
