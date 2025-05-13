import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../../services/produit.service';
import { FournisseurService } from '../../services/fournisseur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.css']
})
export class ProduitFormComponent implements OnInit {
  produitForm: FormGroup;
  fournisseurs: any[] = []; // Initialize here

  constructor(
    private fb: FormBuilder,
    private produitService: ProduitService,
    private fournisseurService: FournisseurService, 
    private router: Router
  ) {
    this.produitForm = this.fb.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      stock: ['', [Validators.required, Validators.min(0)]],
      fournisseurId: [''] 
    });
  }

  ngOnInit(): void {
    
    this.fournisseurService.getAllFournisseurs().subscribe(
      (data) => {
        this.fournisseurs = data; 
      },
      (error) => {
        console.error('Error fetching fournisseurs:', error);
      }
    );
  }
   goBack(): void {
    this.router.navigate(['/produits']);
  }

  onSubmit(): void {
    if (this.produitForm.valid) {
      const formValue = this.produitForm.value;
  
      const produit = {
        nom: formValue.nom,
        type: formValue.type,
        stock: formValue.stock,
        fournisseur: formValue.fournisseurId
          ? { id: formValue.fournisseurId }
          : null,
      };
  
      this.produitService.createProduit(produit).subscribe(
        () => {
          this.router.navigate(['/produits']);
        },
        (error) => {
          console.error('Error creating product:', error);
        }
      );
    }
  }
}