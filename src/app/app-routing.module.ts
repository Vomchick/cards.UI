import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/info' },
  { path: 'info', component: InfoComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
