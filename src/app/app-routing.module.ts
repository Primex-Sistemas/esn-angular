import { DashboardComponent } from './funcionalidade/dashboard/dashboard.component';
import { EspecialidadeComponent } from './funcionalidade/administrativo/especialidade/especialidade.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'especialidades', component: EspecialidadeComponent },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'especialidades', component: EspecialidadeComponent },
    ],

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
