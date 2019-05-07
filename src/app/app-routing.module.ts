import { CandyFormComponent } from './candy-form/candy-form.component';
import { CandyListComponent } from './candy-list/candy-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'create', component: CandyFormComponent},
  {path: 'candy', component: CandyListComponent},
  {path: '', redirectTo: '/candy', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
