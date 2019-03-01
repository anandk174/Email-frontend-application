import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path:'', redirectTo:'/mails', pathMatch:'full'},
  {path:'mails', component: MainComponent},
  {path: 'mails/:id', component: DetailComponent},
  {path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
