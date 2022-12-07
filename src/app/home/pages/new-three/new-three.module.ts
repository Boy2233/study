import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewThreeRoutingModule } from './new-three-routing.module';
import { NewThreeComponent } from './new-three.component';


@NgModule({
  declarations: [
    NewThreeComponent
  ],
  imports: [
    CommonModule,
    NewThreeRoutingModule
  ]
})
export class NewThreeModule { }
