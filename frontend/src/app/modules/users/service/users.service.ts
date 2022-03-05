import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { URL } from "src/app/settings/url.settings";

@Injectable()
export class UsersService extends URL {

    constructor(private http: HttpClient) {
        super();
    }

    findUsers(username: string, password: string): Observable<any> {
        return this.http.get(`${this.URL_API}/users/`, {
            params: { username, password },
            observe: 'response'
        });
    }


}