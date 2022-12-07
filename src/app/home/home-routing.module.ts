import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    children: [
      {
        path: 'new',
        loadChildren: () => import('./pages/new/new.module').then(m => m.NewModule)
      },

      {
        path: 'new-one',
        loadChildren: () => import('./pages/new-one/new-one.module').then(m => m.NewOneModule)
      },

      {
        path: 'new-two',
        loadChildren: () => import('./pages/new-two/new-two.module').then(m => m.NewTwoModule)
      },

      {
        path: 'new-three',
        loadChildren: () => import('./pages/new-three/new-three.module').then(m => m.NewThreeModule)
      },

      {
        path: 'new-four',
        loadChildren: () => import('./pages/new-four/new-four.module').then(m => m.NewFourModule)
      },

      {
        path: 'new-five',
        loadChildren: () => import('./pages/new-five/new-five.module').then(m => m.NewFiveModule)
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
