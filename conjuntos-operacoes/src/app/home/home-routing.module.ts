import {Routes} from '@angular/router';
import {HomeComponent} from "./home.component";

export const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: {title: 'Seja Bem-Vindo'},
        children: [
            /*{
                path: 'menu',
                component: MenuComponent,
                data: {title: 'Menu Intranet'}
            },*/
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            }
        ]
    }
];