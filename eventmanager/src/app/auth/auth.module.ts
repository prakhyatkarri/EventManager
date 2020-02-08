import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormioAppConfig } from 'angular-formio';
import { FormioAuthConfig, FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormioAuth,
    RouterModule.forRoot(FormioAuthRoutes())
  ]
})
export class AuthModule { }
