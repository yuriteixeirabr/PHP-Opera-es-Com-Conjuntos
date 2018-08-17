import {Component, HostBinding, OnInit} from '@angular/core';
import {animationRoutes} from "../animations";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [animationRoutes]
})
export class HomeComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;

    constructor() {
    }

    ngOnInit() {
    }

}
