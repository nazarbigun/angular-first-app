import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventThumbnailComponent,
    EventService,
    EventRouteActivator,
    EventsListResolver,
    CreateSessionComponent
} from './events/index';

import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { appRoutes } from './routes';
import { ToastrService } from './common/toastr.service';
import { AuthService } from './user/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventDetailsComponent,
        CreateEventComponent,
        EventThumbnailComponent,
        CreateSessionComponent,
        NavBarComponent,
        Error404Component,
    ],
    providers: [
        EventService,
        ToastrService,
        AuthService,
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