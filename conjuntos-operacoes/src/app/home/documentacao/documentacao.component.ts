import {Component, HostBinding, OnInit} from '@angular/core';
import {animationRoutes} from "../../animations";

@Component({
    selector: 'app-documentacao',
    templateUrl: './documentacao.component.html',
    styleUrls: ['./documentacao.component.css'],
    animations: [animationRoutes]
})
export class DocumentacaoComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;

    constructor() {
    }

    ngOnInit() {
    }

}
