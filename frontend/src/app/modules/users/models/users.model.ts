export class Users {}

export interface UsersRegistryI {
    email: string;
    username: string;
    password: string;
}

export class UsersRegistry {

    email: string;
    username: string;
    password: string;

    constructor(email: string, username: string, password: string) {
        this.email = email;
        this.username = username;
        this.password = password;
    }

}