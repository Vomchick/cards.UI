import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/info' },
  { path: 'info', component: InfoComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
