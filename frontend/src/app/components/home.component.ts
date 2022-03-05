import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: '../templates/home.component.html'
})
export class HomeComponent implements OnInit {

    get username(): string { return this.Username }
    set username(name: string) {
        this.Username = this.username || "new User"
    }
    private Username = "";

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.paramMap.forEach((obj: any) => {
           this.Username = obj.params.name;
        });
    }

}