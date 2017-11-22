import { Component } from '@angular/core';
import {RestaurantService} from "./components/restaurant/restaurant.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RestaurantService]

})
export class AppComponent {
}
