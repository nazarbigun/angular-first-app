import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventThumbnailComponent,
    EventService,
    EventRouteActivator,
    EventsListResolver
} from './events/index';

import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { appRoutes } from './routes';
import { ToastrService } from './common/toastr.service';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventDetailsComponent,
        CreateEventComponent,
        EventThumbnailComponent,
        NavBarComponent,
        Error404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventsListResolver,
        {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component: CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You have not saved this event, are you sure you want to quit?');
    return true;
}