import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {ServiceBase} from "../../service-base.service";

@Injectable()
export class OperacoesService extends ServiceBase {

    constructor(http: HttpClient) {
        super(http);
    }

    adicionarElemento(conjunto: any[], elemento: any): Observable<any> {
        let body: string = JSON.stringify({"ConjuntoA": conjunto, "Elemento": elemento});
        return this.http.post<any>(`${this.apiUrl}/add`, body, this.getRequestOptionsJSON())
            .pipe(catchError(this.handleError));
    }
}