import { Component, Input } from '@angular/core';
import {Restaurant} from "./restaurant.model";
import {RestaurantService} from "./restaurant.service";


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  @Input() restaurant: Restaurant;


  constructor(private restaurantService: RestaurantService){

  }

  onSelect(){
    this.restaurantService.getRestaurantDetails(this.restaurant.id);
  }
}
