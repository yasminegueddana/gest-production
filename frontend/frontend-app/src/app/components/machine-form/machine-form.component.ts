import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MachineService } from '../../services/machine.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-machine-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Ensure ReactiveFormsModule is imported
  templateUrl: './machine-form.component.html',
  styleUrls: ['./machine-form.component.css']
})
export class MachineFormComponent implements OnInit {
  machineForm!: FormGroup;
  today: string = '';

  constructor(private fb: FormBuilder, private router: Router, private machineService: MachineService) {
    this.machineForm = this.fb.group({
      nom: ['', Validators.required],
      etat: ['', Validators.required],
    });
  }
    ngOnInit(): void {
    // Initialise la date d'aujourd'hui au format yyyy-MM-dd
    const now = new Date();
    this.today = now.toISOString().split('T')[0];

    this.machineForm = this.fb.group({
      nom: ['', Validators.required],
      etat: ['', Validators.required],
      prochaineMaintenance: ['', [Validators.required, this.futureDateValidator]]
    });
  }

  // Validateur personnalisé
  futureDateValidator(control: AbstractControl): ValidationErrors | null {
    const inputDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ignore time portion
    return inputDate > today ? null : { notFutureDate: true };
  }

  onSubmit(): void {
    if (this.machineForm.valid) {
      const newMachine = this.machineForm.value;
      this.machineService.createMachine(newMachine).subscribe(
        () => {
          this.router.navigate(['/machines']);
        },
        (error) => {
          console.error('Error creating machine:', error);
        }
      );
    }
  }
  

  goBack(): void {
    this.router.navigate(['/machines']);
  }
}