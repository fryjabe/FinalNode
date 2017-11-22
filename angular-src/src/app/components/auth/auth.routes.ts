import { Routes } from "@angular/router";

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'zarejestruj', pathMatch: 'full' },
    { path: 'zarejestruj', component: SignupComponent },
    { path: 'zaloguj', component: SigninComponent },
];