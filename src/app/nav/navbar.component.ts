import { Component } from "@angular/core";
import { EventService, IEvent, ISession } from "../events";
import { AuthService } from "../user/auth.service";


@Component ({
    selector: "nav-bar",
    templateUrl: "./navbar.component.html",
    styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #F97924;}`]
})

export class NavBarComponent {
    searchTerm: string = "";
    foundSessions: ISession[];
    events: IEvent[];

    constructor(public auth: AuthService, private eventService: EventService) {
        this.eventService.getEvents().subscribe(sessions => this.events = sessions)
    }

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => this.foundSessions = sessions)
    }
}