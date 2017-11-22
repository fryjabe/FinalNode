import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantsComponent } from './components/restaurant/restaurants.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantDetailsComponent } from './components/restaurant/restaurant-details.component';
import {routing} from "./app.routing";
import { AuthComponent } from './components/auth/auth.component';
import { SignupComponent } from './components/auth/signup.component';
import { SigninComponent } from './components/auth/signin.component';
import {RestaurantService} from "./components/restaurant/restaurant.service";
import {AuthService} from "./components/auth/auth.service";
import {PopupModule} from "ng2-opd-popup/components/popup/popup.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
      routing,
    PopupModule.forRoot()
  ],
  providers: [RestaurantService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
