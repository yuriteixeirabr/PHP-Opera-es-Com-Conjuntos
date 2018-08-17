import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {ServiceBase} from "./service-base.service";
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from "@angular/material";
import {SharedModule} from "./SharedModule";
import {HomeModule} from "./home/home.module";

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HomeModule,
        SharedModule,
        AppRoutingModule //Deixa por ultimo dos outros modulos
    ],
    entryComponents: [],
    providers: [ServiceBase, {provide: ErrorStateMatcher,
        useClass: ShowOnDirtyErrorStateMatcher}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
