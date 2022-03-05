import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { URL } from "../settings/url.settings";

@Injectable()
export class AppService extends URL {

    constructor(private http: HttpClient) {
        super();
    }
    
    getWelcome(): Observable<any> {
        return this.http.get(`${this.URL_API}`)
    }

}