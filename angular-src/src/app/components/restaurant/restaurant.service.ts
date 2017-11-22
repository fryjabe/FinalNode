import {Restaurant} from "./restaurant.model";
import {Http,Response } from "@angular/http";
import {Injectable,EventEmitter} from "@angular/core"
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class RestaurantService{
    private restaurants: Restaurant[]=[];
    restaurantIsSelected = new EventEmitter<Restaurant>();

    constructor(private http: Http){

    }

    getRestaurant(){
        return this.http.get('https://foodsi.applover.pl/api/v1/restaurants').map((response:Response)=>{
           const restaurants= response.json().restaurants;
            console.log(restaurants);
            let transformedRestaurants: Restaurant[]=[];
            for (let restaurant of restaurants){
                transformedRestaurants.push(new Restaurant(
                    restaurant.id,
                    restaurant.name,
                    restaurant.meal.original_price,
                    restaurant.meal.price,
                    restaurant.meal.amount,
                    restaurant.start_time,
                    restaurant.end_time,
                    restaurant.address));
            }
            this.restaurants=transformedRestaurants;
            return transformedRestaurants;
        }).catch((error:Response)=> Observable.throw(error.json()));
    }

    getRestaurantDetails(restaurantId: number){
        return this.http.get('https://foodsi.applover.pl/api/v1/restaurants/'+restaurantId+'meal').map((response:Response)=>{
            const restaurant= response.json();
            console.log(restaurant);
            let transformedRestaurant= new Restaurant(
                    restaurant.id,
                    restaurant.name,
                    restaurant.meal.original_price,
                    restaurant.meal.price,
                    restaurant.meal.amount,
                    restaurant.start_time,
                    restaurant.end_time,
                    restaurant.address);

            return transformedRestaurant;
        }).catch((error:Response)=> Observable.throw(error.json()));

    }

}