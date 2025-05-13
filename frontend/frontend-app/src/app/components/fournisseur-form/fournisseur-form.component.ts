import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FournisseurService } from '../../services/fournisseur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './fournisseur-form.component.html',
  styleUrls: ['./fournisseur-form.component.css']
})
export class FournisseurFormComponent {
  fournisseurForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fournisseurService: FournisseurService,
    private router: Router
  ) {
    this.fournisseurForm = this.fb.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\d{8,}$/)]]
    });
  }

  onSubmit(): void {
    if (this.fournisseurForm.valid) {
      const newFournisseur = this.fournisseurForm.value;
      this.fournisseurService.createFournisseur(newFournisseur).subscribe(
        () => this.router.navigate(['/fournisseurs']),
        (error) => console.error('Erreur lors de l\'ajout :', error)
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/fournisseurs']);
  }
}
