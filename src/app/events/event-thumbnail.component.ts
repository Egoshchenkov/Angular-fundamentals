import { Component, Input } from "@angular/core";
import { IEvent } from "./index";

@Component({
    selector: "event-thumbnail",
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event.name | uppercase}}</h2>
            <div>Date: {{event.date | date}}</div>
            <div [ngClass]="getStartTimeClass()">Time: {{event.time}}</div>
            <div>Price: {{event.price | currency}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            </div>
        </div>`,
    styles: [`
        .green {color: #003300 !important;}
        .bold{font-weight: bold;}
        .thumbnail {min-height: 210px}
        .pad-left {margin-left: 10px;}
        .well {color: #bbb;}`]
})

export class EventThumbnailComponent {
    @Input() event:IEvent

    getStartTimeClass() {
        if(this.event && this.event.time === '8:00 am')
        return 'green bold'
    }
}