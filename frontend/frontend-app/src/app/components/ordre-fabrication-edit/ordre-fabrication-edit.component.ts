import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // For *ngIf, *ngFor
import { ReactiveFormsModule } from '@angular/forms'; // For formGroup, formControl
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ordre-fabrication-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Add these imports
  templateUrl: './ordre-fabrication-edit.component.html',
  styleUrls: ['./ordre-fabrication-edit.component.css']
})
export class OrdreFabricationEditComponent implements OnInit {
  ordreForm!: FormGroup;
  produits: any[] = [];
  ordreId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Initialize the form
    this.ordreForm = this.fb.group({
      projet: ['', Validators.required],
      produit: [null, Validators.required], // Default value is null
      quantite: [null, [Validators.required, Validators.min(1)]],
      date: [new Date().toISOString().split('T')[0], Validators.required],
      etat: ['En cours', Validators.required]
    });

    // Fetch the list of products
    this.http.get<any[]>('http://localhost:8081/api/produits')
      .subscribe(
        (data) => {
          this.produits = data;
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );

    // Get the order ID from the route
    this.route.params.subscribe((params) => {
      this.ordreId = +params['id']; // Convert to number
      this.loadOrdre(this.ordreId);
    });
  }

  loadOrdre(id: number): void {
    this.http.get<any>(`http://localhost:8081/api/ordres/${id}`)
      .subscribe(
        (ordre) => {
          this.ordreForm.patchValue({
            projet: ordre.projet,
            produit: ordre.produit,
            quantite: ordre.quantite,
            date: ordre.date,
            etat: ordre.etat
          });
        },
        (error) => {
          console.error('Error loading ordre:', error);
        }
      );
  }
    goBack(): void {
    this.router.navigate(['/ordres']);
  }

  onSubmit(): void {
    if (this.ordreForm.valid) {
      const updatedOrdre = this.ordreForm.value;
      this.http.put(`http://localhost:8081/api/ordres/${this.ordreId}`, updatedOrdre)
        .subscribe(
          () => {
            console.log('Order updated successfully.');
            this.router.navigate(['/ordres']); // Redirect to the order list
          },
          (error) => {
            console.error('Error updating order:', error);
          }
        );
    }
  }
}