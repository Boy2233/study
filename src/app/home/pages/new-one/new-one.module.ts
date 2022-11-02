import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewOneRoutingModule } from './new-one-routing.module';
import { NewOneComponent } from './new-one.component';


@NgModule({
  declarations: [
    NewOneComponent
  ],
  imports: [
    CommonModule,
    NewOneRoutingModule
  ]
})
export class NewOneModule { }
