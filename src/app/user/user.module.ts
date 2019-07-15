import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule
  ]
})
export class UserModule { }
