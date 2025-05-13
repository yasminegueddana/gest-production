import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseUrl = 'http://localhost:8081/api/produits'; 

  constructor(private http: HttpClient) {}

  getAllProduits(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createProduit(produit: any): Observable<any> {
    return this.http.post(this.baseUrl, produit);
  }

  getProduitById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateProduit(id: number, produit: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, produit);
  }

  deleteProduit(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  
}