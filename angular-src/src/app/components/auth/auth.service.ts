import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import {User} from "./auth.model";

@Injectable()
export class AuthService{
    constructor(private http: Http){
    }

    signUp(user:User){
        const body= JSON.stringify(user);
        const headers= new Headers ({'Content-type':'application/json'});
        return this.http.post('https://foodsi.applover.pl/api/v1/auth',body,{headers:headers})
            .map((response:Response)=> response.json())
            .catch((error: Response)=>Observable.throw(error.json()));
    }

    signIn(user:User){
        const body= JSON.stringify(user);
        const headers= new Headers ({'Content-type':'application/json'});
        return this.http.post('https://foodsi.applover.pl/api/v1/auth/sign_in',body,{headers:headers})
            .map((response:Response)=> response.json())
            .catch((error: Response)=>Observable.throw(error.json()));
    }


}