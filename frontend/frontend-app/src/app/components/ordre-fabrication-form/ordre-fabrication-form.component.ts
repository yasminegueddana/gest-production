import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OrdreFabricationService } from '../../services/ordre-fabrication.service';

@Component({
  selector: 'app-ordre-fabrication-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './ordre-fabrication-form.component.html',
  styleUrls: ['./ordre-fabrication-form.component.css']
})
export class OrdreFabricationFormComponent implements OnInit {
  ordreForm: FormGroup;
  produits: any[] = [];

  constructor(
    private fb: FormBuilder,
    private ordreFabricationService: OrdreFabricationService,
    private http: HttpClient,
    private router: Router
  ) {
    this.ordreForm = this.fb.group({
      projet: ['', Validators.required],
      produit: [null, Validators.required],
      quantite: [null, [Validators.required, Validators.min(1)]],
      date: [new Date().toISOString().split('T')[0], Validators.required],
      etat: ['En cours', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchProduits();
  }

  fetchProduits(): void {
    this.http.get<any[]>('http://localhost:8081/api/produits').subscribe(
      (data) => {
        this.produits = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des produits:', error);
      }
    );
  }
   goBack(): void {
    this.router.navigate(['/ordres']);
  }

  onSubmit(): void {
    if (this.ordreForm.valid) {
      const newOrdre = this.ordreForm.value;
      this.ordreFabricationService.createOrdre(newOrdre).subscribe(
        () => {
          this.router.navigate(['/ordres']);
        },
        (error) => {
          console.error('Erreur lors de la création de l\'ordre:', error);
        }
      );
    }
  }
}
