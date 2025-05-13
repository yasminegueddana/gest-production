import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../services/produit.service';
import { FournisseurService } from '../../services/fournisseur.service';

@Component({
  selector: 'app-produit-edit',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit {
  produitForm: FormGroup;
  fournisseurs: any[] = [];
  produitId!: number;

  constructor(
    private fb: FormBuilder,
    private produitService: ProduitService,
    private fournisseurService: FournisseurService,
    private route: ActivatedRoute,
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
    // Fetch the list of fournisseurs
    this.fournisseurService.getAllFournisseurs().subscribe(
      (data) => {
        this.fournisseurs = data;
      },
      (error) => {
        console.error('Error fetching fournisseurs:', error);
      }
    );

    // Get the product ID from the route
    this.route.params.subscribe((params) => {
      this.produitId = +params['id']; // Convert to number
      this.loadProduit(this.produitId);
    });
  }

  loadProduit(id: number): void {
    this.produitService.getProduitById(id).subscribe(
      (produit) => {
        this.produitForm.patchValue({
          nom: produit.nom,
          type: produit.type,
          stock: produit.stock,
          fournisseurId: produit.fournisseur?.id || ''
        });
      },
      (error) => {
        console.error('Error loading produit:', error);
      }
    );
  }

    goBack(): void {
    this.router.navigate(['/produits']);
  }

  onSubmit(): void {
    if (this.produitForm.valid) {
      const updatedProduit = this.produitForm.value;
      updatedProduit.fournisseur = { id: updatedProduit.fournisseurId };

      this.produitService.updateProduit(this.produitId, updatedProduit).subscribe(
        () => {
          this.router.navigate(['/produits']);
        },
        (error) => {
          console.error('Error updating produit:', error);
        }
      );
    }
  }
}