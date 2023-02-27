import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/info' },
  {
    path: 'info',
    component: InfoComponent,
    loadChildren: () =>
      import('./pages/info/info.module').then((x) => x.InfoModule),
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/admin/admin.module').then((x) => x.AdminModule),
  },
  {
    path: 'login',
    component: AuthenticationComponent,
    loadChildren: () =>
      import('./pages/authentication/authentication.module').then(
        (x) => x.AuthenticationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
