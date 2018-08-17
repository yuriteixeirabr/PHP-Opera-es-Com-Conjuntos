import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {homeRoutes} from "./home/home-routing.module";

const routes: Routes = [
    ...homeRoutes,
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
