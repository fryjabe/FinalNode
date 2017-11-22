import { Component, OnInit } from '@angular/core';
import {Restaurant} from "./restaurant.model";
import {RestaurantService} from "./restaurant.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Popup} from "ng2-opd-popup/components/popup/popup.service";

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit{
  restaurant: Restaurant;


  constructor(  private route: ActivatedRoute,
                private router: Router,
                private restaurantService: RestaurantService,
                private popup:Popup){}


  ClickButton(){
    this.popup.show();
  }

goBack(){
  this.router.navigate(['/auth']);

}


  ngOnInit(){
    /*this.route.params.switchMap((params:Params)=>this.restaurantService.getRestaurantDetails(+params['id']))
        .subscribe((restaurant: Restaurant)=> this.restaurant=restaurant);*/
    this.popup.options = {
      header: "Dołącz do nas bądź zaloguj się",
      color: "#7DD82E", // red, blue....
      widthProsentage: 40, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      confirmBtnContent: "OK", // The text on your confirm button
      cancleBtnContent: "Cancel", // the text on your cancel button
      confirmBtnClass: "btn btn-default", // your class for styling the confirm button
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
    };
  }
}
