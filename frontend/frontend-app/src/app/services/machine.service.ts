import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private baseUrl = 'http://localhost:8081/api/machines'; // Base URL of your backend API

  constructor(private http: HttpClient) {}

  // Get all machines
  getAllMachines(): Observable<any> {
    return this.http.get<any>(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get a single machine by ID
  getMachineById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Create a new machine
  createMachine(machine: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, machine).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing machine
  updateMachine(id: number, updatedMachine: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, updatedMachine).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a machine by ID
  deleteMachine(id: number): Observable<any> {
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