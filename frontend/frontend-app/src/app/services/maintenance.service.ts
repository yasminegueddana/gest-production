import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  private baseUrl = 'http://localhost:8081/api/maintenances';

  constructor(private http: HttpClient) {}
 
  
   getAllMaintenances(): Observable<any> {
     return this.http.get<any>(this.baseUrl).pipe(
       catchError(this.handleError)
     );
   }
   getMaintenanceById(id: number): Observable<any> {
     return this.http.get<any>(`${this.baseUrl}/${id}`).pipe(
       catchError(this.handleError)
     );
   }

   createMaintenance(maintenance: any): Observable<any> {
     return this.http.post<any>(this.baseUrl, maintenance).pipe(
       catchError(this.handleError)
     );
   }
 
   updateMaintenance(id: number, updatedMaintenance: any): Observable<any> {
     return this.http.put<any>(`${this.baseUrl}/${id}`, updatedMaintenance).pipe(
      catchError(this.handleError)
    );
  }

   deleteMaintenance(id: number): Observable<any> {
     return this.http.delete<any>(`${this.baseUrl}/${id}`).pipe(
       catchError(this.handleError)
     );
   }
 // Handle errors
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
