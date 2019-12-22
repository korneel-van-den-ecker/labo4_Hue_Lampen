import { Injectable } from '@angular/core';
import { Lamp } from './lamp';
// import { LAMPEN } from './mock-lampen';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LampService {
  // School bridge
  // private hueUrl = `http://10.194.112.8/api/POupQekuVaV8NOOhEPxxM1uZEtSlYbDQytO-C72-/lights`;
  // Hue bridge sim
  // private hueUrl = `http://localhost:3000/api/POupQekuVaV8NOOhEPxxM1uZEtSlYbDQytO-C72-/lights`;
  // Naert Bridge
   private hueUrl = `http://178.118.245.113/api/d8cHvqBsSW9iVf6lLMlisoJj96RfV7VybBRwmD42/lights`;

  httpOptions = {
    // Dit als je instellingen op server kan veranderen ; via proxy dan
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

  getLamp(id: number) {
    return this.http.get(`${this.hueUrl}/${id}`);
  }

  putLamp(lamp: Lamp) {
    // Checken of we de lamp wel wensen aan te zetten , anders gewoon uitzetten
    console.log({on: lamp.on, bri: lamp.sterkte, xy: lamp.xy});
    if (lamp.on === false) {
      return this.http.put(`${this.hueUrl}/${lamp.id}/state`, {on: lamp.on}, this.httpOptions).subscribe(
        (res) => console.log(res)
      );
    } else {
      return this.http.put(`${this.hueUrl}/${lamp.id}/state`, {on: lamp.on, bri: lamp.sterkte, xy: lamp.xy}, this.httpOptions).subscribe(
        (res) => console.log(res) // Het antwoord na de put kan vanuit hier eventueel geëvalueerd worden
      );
    }
  }

}
