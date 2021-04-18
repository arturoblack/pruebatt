import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './pages/auth/auth-layout/auth-layout.component';
import { AuthLoginComponent } from './pages/auth/auth-login/auth-login.component';
import { AuthLogoutComponent } from './pages/auth/auth-logout/auth-logout.component';
import { RlLayoutComponent } from './pages/rl/rl-layout/rl-layout.component';
import { RlHomeComponent } from './pages/rl/rl-home/rl-home.component';
import { BossLayoutComponent } from './pages/boss/boss-layout/boss-layout.component';
import { BossMainComponent } from './pages/boss/boss-main/boss-main.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JWTInterceptor } from './services/jw.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AuthLoginComponent,
    AuthLogoutComponent,
    RlLayoutComponent,
    RlHomeComponent,
    BossLayoutComponent,
    BossMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JWTInterceptor,
    multi: true,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
