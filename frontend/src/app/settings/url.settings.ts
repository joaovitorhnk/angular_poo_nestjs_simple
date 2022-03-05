import { environment } from "src/environments/environment"

export abstract class URL {

    get URL_API(): string { return this._URL_API }
    protected _URL_API: string = environment.apiUrl ? environment.apiUrl : 'Not Found Url'

}