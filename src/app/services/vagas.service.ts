import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingSpot } from '../parking-spot';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VagasService { 

 private apiUrl = 'http://localhost:8080/api/vagas';

  constructor(private http: HttpClient) { }

//  list(): ParkingSpot[] {
 //   return [
  //    { id: 1, number: '1', type: 'Comum', price: 5, status: 'Disponível' },
  //    { id: 2, number: '2', type: 'VIP', price: 10, status: 'Reservada' },
  //    { id: 3, number: '3', type: 'Comum', price: 5, status: 'Ocupada' }
  //  ];
//  }

getAll(): Observable<ParkingSpot[]> {
 return this.http.get<ParkingSpot[]>(this.apiUrl).pipe(
  catchError((error) => {
    console.error('Erro ao buscar vagas:', error);
    return throwError(() => new Error('Erro ao buscar vagas.'));
  })
);
}

save(record: ParkingSpot) {
 return this.http.post<ParkingSpot>(this.apiUrl, record);
}


}
