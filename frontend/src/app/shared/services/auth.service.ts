import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isLogged = false;

    public isLogin(): boolean {
        if(this.isLogged) {
            return true;
        } else {
            return false;
        }
    }
}