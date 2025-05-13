import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdreFabricationService {
  private baseUrl = 'http://localhost:8081/api/ordres'; // Backend API URL

  constructor(private http: HttpClient) {}

  getAllOrdres(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getOrdreById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createOrdre(ordre: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, ordre);
  }

  updateOrdre(id: number, updatedOrdre: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, updatedOrdre);
  }

  deleteOrdre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}