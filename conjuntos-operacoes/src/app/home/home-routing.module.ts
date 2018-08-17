import {Routes} from '@angular/router';
import {HomeComponent} from "./home.component";
import {OperacoesComponent} from "./operacoes/operacoes.component";
import {DocumentacaoComponent} from "./documentacao/documentacao.component";

export const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: {title: 'Seja Bem-Vindo'},
        children: [
            {
                path: 'operacoes',
                component: OperacoesComponent,
                data: {title: 'Operações com Conjuntos'}
            },
            {
                path: 'documentacao-api',
                component: DocumentacaoComponent,
                data: {title: 'Documentação API'}
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            }
        ]
    }
];