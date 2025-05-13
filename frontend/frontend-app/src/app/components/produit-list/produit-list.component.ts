import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-list',
  imports: [CommonModule],
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  produits: any[] = [];

  constructor(private produitService: ProduitService, private router: Router) {}

  ngOnInit(): void {
    this.produitService.getAllProduits().subscribe(
      (data) => {
        this.produits = data;
      },
      (error) => {
        console.error('Error fetching produits:', error);
      }
    );
  }

   addProduits(): void {
    this.router.navigate(['/produits/add']);
  }

  deleteProduit(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.produitService.deleteProduit(id).subscribe(
        () => {
          this.produits = this.produits.filter(p => p.id !== id);
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }

  editProduit(id: number): void {
    this.router.navigate(['/produits/edit', id]);
  }
}