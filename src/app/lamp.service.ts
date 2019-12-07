import { Injectable } from '@angular/core';
import { Lamp } from './lamp';
import { LAMPEN } from './mock-lampen';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LampService {
  private hueUrl = `http://10.194.112.8/api/POupQekuVaV8NOOhEPxxM1uZEtSlYbDQytO-C72-/lights`;

  httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(
    private http: HttpClient ) { }

 /*  getLampen(): Observable<Lamp[]> {
    return of (LAMPEN);
  } */

  getLampen() {
    return this.http.get(this.hueUrl);
  }

  /* private handleError<T>(operation = 'operation' , result?: T) {
    return(error: any): Observable<T> => {
      console.error(error);
      // this.log(`${operation} failed= ${error.message}`);
      return of(result as T);
    }
  }

  updateLamp(lamp: Lamp): Observable<any> {
    return this.http.put(`${this.hueUrl}/${lamp.id}/state/`, lamp, this.httpOptions).pipe(
      tap(_ => console.log(`updated hero id=${lamp.id}`)),
      catchError(this.handleError<any>('updateLamp'))
    );
  } */
}
