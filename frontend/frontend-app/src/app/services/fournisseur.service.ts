import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private baseUrl = 'http://localhost:8081/api/fournisseurs'; // Base URL of your backend API

  constructor(private http: HttpClient) { }

  // Get all fournisseurs
  getAllFournisseurs(): Observable<any> {
    return this.http.get(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Create a new fournisseur
  createFournisseur(fournisseur: any): Observable<any> {
    return this.http.post(this.baseUrl, fournisseur).pipe(
      catchError(this.handleError)
    );
  }

  // Handle errors
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  // Update a fournisseur
  updateFournisseur(id: number, fournisseur: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, fournisseur).pipe(
    catchError(this.handleError)
  );
  }
  

  // Delete a fournisseur
  deleteFournisseur(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`).pipe(
    catchError(this.handleError)
  );
  }

  // Get a single fournisseur by ID
getFournisseurById(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/${id}`).pipe(
    catchError(this.handleError)
  );
}


}