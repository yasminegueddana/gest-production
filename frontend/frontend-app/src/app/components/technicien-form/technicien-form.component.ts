import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TechnicienService } from '../../services/technicien.service';
import { MachineService } from '../../services/machine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technicien-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './technicien-form.component.html',
  styleUrls: ['./technicien-form.component.css'],
})
export class TechnicienFormComponent implements OnInit {
  technicienForm: FormGroup;
  machines: any[] = [];

  constructor(
    private fb: FormBuilder,
    private technicienService: TechnicienService,
    private machineService: MachineService,
    private router: Router
  ) {
    this.technicienForm = this.fb.group({
      nom: ['', Validators.required],
      competences: ['', Validators.required],
      machine: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadMachines();  // Load available machines (not in maintenance)
  }

  loadMachines(): void {
    this.machineService.getAllMachines().subscribe(
      (data) => {
        // Filter machines that are not in maintenance (status !== 'maintenance')
        this.machines = data.filter((machine: any) => machine.etat !== 'En maintenance');
      },
      (error) => {
        console.error('Error loading machines:', error);
      }
    );
  }

    goBack(): void {
    this.router.navigate(['/techniciens']);
  }
  

  onSubmit(): void {
    if (this.technicienForm.valid) {
      const formValue = this.technicienForm.value;
      const newTechnicien = {
        nom: formValue.nom,
        competences: formValue.competences,
        machineAssignee: { id: formValue.machine }
      };
      this.technicienService.createTechnicien(newTechnicien).subscribe(
        () => {
          alert('Technicien created successfully!');
          this.router.navigate(['/techniciens']);
        },
        (error) => {
          console.error('Error creating technicien:', error);
        }
      );
    }
  }
}
