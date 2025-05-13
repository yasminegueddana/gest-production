import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FournisseurService } from '../../services/fournisseur.service';

@Component({
  selector: 'app-fournisseur-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fournisseur-edit.component.html',
  styleUrls: ['./fournisseur-edit.component.css']
})
export class FournisseurEditComponent implements OnInit {
  fournisseur: any = {};
  fournisseurId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private fournisseurService: FournisseurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the ID from the route parameters
    this.fournisseurId = +this.route.snapshot.paramMap.get('id')!;
    this.fournisseurService.getFournisseurById(this.fournisseurId).subscribe(
      (data) => {
        this.fournisseur = data;
      },
      (error) => {
        console.error('Error fetching fournisseur:', error);
      }
    );
  }
    goBack(): void {
    this.router.navigate(['/fournisseurs']);
  }

  onSubmit(): void {
    this.fournisseurService.updateFournisseur(this.fournisseurId, this.fournisseur).subscribe(
      () => {
        this.router.navigate(['/fournisseurs']);
      },
      (error) => {
        console.error('Error updating fournisseur:', error);
      }
    );
  }
}