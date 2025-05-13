import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TechnicienService {
  private apiUrl = 'http://localhost:8081/api/techniciens'; // Backend API URL

  constructor(private http: HttpClient) {}

  getAllTechniciens(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createTechnicien(technicien: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, technicien);
  }

  getTechnicienById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateTechnicien(id: number, technicien: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, technicien);
  }

  deleteTechnicien(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}