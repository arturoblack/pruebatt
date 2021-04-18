import { IsBossGuard } from './guards/is-boss.guard';
import { IsLoginGuard } from './guards/is-login.guard';
import { BossMainComponent } from './pages/boss/boss-main/boss-main.component';
import { BossLayoutComponent } from './pages/boss/boss-layout/boss-layout.component';
import { RlHomeComponent } from './pages/rl/rl-home/rl-home.component';
import { RlLayoutComponent } from './pages/rl/rl-layout/rl-layout.component';
import { AuthLogoutComponent } from './pages/auth/auth-logout/auth-logout.component';
import { AuthLoginComponent } from './pages/auth/auth-login/auth-login.component';
import { AuthLayoutComponent } from './pages/auth/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth', component: AuthLayoutComponent,
    children: [
      { path: 'login', component: AuthLoginComponent },
      { path: 'logout', component: AuthLogoutComponent },
    ]
  },
  {
    path: 'rl', component: RlLayoutComponent,
    canActivate: [IsLoginGuard],
    children: [
      { path: '', component: RlHomeComponent },
    ]
  },
  {
    path: 'boss', component: BossLayoutComponent,
    canActivate: [IsLoginGuard, IsBossGuard],
    children: [
      { path: '', component: BossMainComponent },
    ]
  },
  {
    path: '', redirectTo: '/auth/login', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
