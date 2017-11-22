import { Routes, RouterModule} from "@angular/router";
import {RestaurantsComponent} from "./components/restaurant/restaurants.component";
import {RestaurantDetailsComponent} from "./components/restaurant/restaurant-details.component";
import { AUTH_ROUTES } from "./components/auth/auth.routes";
import {AuthComponent} from "./components/auth/auth.component";


const APP_ROUTES: Routes= [
    {path: '', pathMatch: 'full', component: RestaurantsComponent},
    {path: 'restauracje', component: RestaurantsComponent},
    {path: 'restauracja/:id', component: RestaurantDetailsComponent},
    {path: 'auth', component: AuthComponent, children: AUTH_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
