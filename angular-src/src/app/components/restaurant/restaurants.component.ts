import { Component, Input, OnInit } from '@angular/core';
import {Restaurant} from "./restaurant.model";
import {RestaurantService} from "./restaurant.service";
import { Router} from '@angular/router';



@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit{

  restaurants: Restaurant[];

constructor(private router: Router, private restaurantService: RestaurantService){

}

  ngOnInit(){
    this.restaurantService.getRestaurant().subscribe((restaurants: Restaurant[])=>{
    this.restaurants= restaurants;
    }
  );
  }

  onSelect(restaurant: Restaurant){
    this.router.navigate(['/restauracja', restaurant.id]);
  }


}
