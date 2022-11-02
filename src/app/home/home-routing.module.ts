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
        path: 'newone',
        loadChildren: () => import('./pages/new-one/new-one.module').then(m => m.NewOneModule)
      },

      {
        path: 'newtwo',
        loadChildren: () => import('./pages/new-two/new-two.module').then(m => m.NewTwoModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
