import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {throwError} from 'rxjs';

@Injectable()
export class ServiceBase {
    protected apiUrl: string = 'http://localhost:8081/ulbra/md/api/index.php/api/v1';

    constructor(protected http: HttpClient) {
    }

    protected getRequestOptionsJSON() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    protected handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }

        return throwError(error.error.Error ? error.error.Error : 'Ops ocorreu um erro');
    };
}