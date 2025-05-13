import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FournisseurService } from '../../services/fournisseur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent {
  fournisseurs: any[] = []; 

  constructor(
    private fournisseurService: FournisseurService, 
    private router: Router // Inject Router for navigation
  ) {
    this.fournisseurService.getAllFournisseurs().subscribe(
      (data) => {
        console.log('Fetched fournisseurs:', data); 
        this.fournisseurs = data;
      },
      (error) => {
        console.error('Error fetching fournisseurs:', error);
      }
    );
  }
    addFournisseur(): void {
    this.router.navigate(['/fournisseurs/add']);
  }

  // Navigate to the edit page for a specific fournisseur
  editFournisseur(id: number): void {
    this.router.navigate(['/fournisseurs/edit', id]); // Navigate to edit route
  }

  // Delete a fournisseur
  deleteFournisseur(id: number): void {
    if (confirm('Are you sure you want to delete this fournisseur?')) {
      this.fournisseurService.deleteFournisseur(id).subscribe(
        () => {
          // Remove the deleted fournisseur from the list
          this.fournisseurs = this.fournisseurs.filter(f => f.id !== id);
        },
        (error) => {
          console.error('Error deleting fournisseur:', error);
        }
      );
    }
  }
}