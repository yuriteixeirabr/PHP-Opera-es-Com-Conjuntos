import {Component, HostBinding, OnInit} from '@angular/core';
import {animationRoutes} from "../../animations";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-operacoes',
    templateUrl: './operacoes.component.html',
    styleUrls: ['./operacoes.component.css'],
    animations: [animationRoutes]
})
export class OperacoesComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;

    tipoOperacaoFormControl = new FormControl('', [Validators.required]);

    conjuntoForm: FormGroup = new FormGroup({
        tipoOperacao: this.tipoOperacaoFormControl
    });

    tiposOperacoes: string[] = ['Adicionar Elemento', 'Remover Elemento', 'Verificar Pertinência', 'Verificar Continência',
    'Realizar União (Com outro conjunto)', 'Realizar Disjunção (Com outro conjunto)', 'Realizar Diferença (Com outro conjunto)',
    'Realizar Complemento (Em relação a outro conjunto)', 'Gerar Conjunto das Partes', 'Realizar Produto Cartesiano (Com outro conjunto)',
    'Realizar a União Disjunta (Com outro conjunto)'];
    error: string;
    transactionStart: boolean = false;
    color: string = 'primary';
    mode: string = 'indeterminate';
    value: number = 0;
    bufferValue: number = 75;

    constructor() {
    }

    ngOnInit() {
    }

    selectOperacao(operacao: string): void {
        console.log(operacao);
    }

    getRequiredErrorMessage(field: string): any {
        return this.conjuntoForm.get(field).hasError('required') ? 'Campo é obrigatório' : '';
    }

    fecharError(): void {
        this.error = '';
    }
}
