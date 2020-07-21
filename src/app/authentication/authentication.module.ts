import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { AuthenticationComponent } from "./page/authentication/authentication.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
  ],
  imports: [CommonModule, SharedModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
