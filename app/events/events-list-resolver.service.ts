import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {EventService} from './shared/event.service';

@Injectable()

export class EventsListResolver implements Resolve<any>{
    constructor(private eventsService: EventService){}
    resolve() {
        return this.eventsService.getEvents().map(events => events)
    }
}