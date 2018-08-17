import {NgModule} from '@angular/core';

import {SharedModule} from "../SharedModule";
import {HomeComponent} from "./home.component";
import {OperacoesComponent} from './operacoes/operacoes.component';
import {DocumentacaoComponent} from './documentacao/documentacao.component';
import {OperacoesService} from "./operacoes/operacoes-service";

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        HomeComponent,
        OperacoesComponent,
        DocumentacaoComponent
    ],
    providers: [OperacoesService]
})
export class HomeModule {
}