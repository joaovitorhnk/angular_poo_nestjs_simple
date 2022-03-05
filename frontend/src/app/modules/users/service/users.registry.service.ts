import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { URL } from "src/app/settings/url.settings";
import { UsersRegistryI } from "../models/users.model";

@Injectable()
export class UsersRegistryService extends URL {

    constructor(private http: HttpClient) {
        super();
    }

    create(body: UsersRegistryI): Observable<any> {
        return this.http.post(`${this.URL_API}/users`, body, {
            observe: 'response'
        })
    }

}