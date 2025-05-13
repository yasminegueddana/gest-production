import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicienService } from '../../services/technicien.service';
import { MachineService } from '../../services/machine.service';

@Component({
  selector: 'app-technicien-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './technicien-edit.component.html',
  styleUrls: ['./technicien-edit.component.css'],
})
export class TechnicienEditComponent implements OnInit {
  technicienForm: FormGroup;
  technicienId!: number;
  machines: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private technicienService: TechnicienService,
    private machineService: MachineService
  ) {
    this.technicienForm = this.fb.group({
      nom: ['', Validators.required],
      competences: ['', Validators.required],
      machine: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.technicienId = +this.route.snapshot.params['id'];
    this.loadMachines();
    this.loadTechnicien(this.technicienId);
  }

  loadMachines(): void {
    this.machineService.getAllMachines().subscribe(
      (data) => {
        // Assuming each machine has a 'status' field, filter out machines with 'maintenance' status
        this.machines = data.filter((machine: any) => machine.etat !== 'En maintenance');
      },
      (error) => {
        console.error('Error loading machines:', error);
      }
    );
  }
  

  loadTechnicien(id: number): void {
    this.technicienService.getTechnicienById(id).subscribe(
      (technicien) => {
        this.technicienForm.patchValue({
          nom: technicien.nom,
          competences: technicien.competences,
          machine: technicien.machine?.nom || '' // Set machine ID if available
        });
      },
      (error) => {
        console.error('Error loading Technicien:', error);
      }
    );
  }
    goBack(): void {
    this.router.navigate(['/techniciens']);
  }

  onSubmit(): void {
    if (this.technicienForm.valid) {
      const formValues = this.technicienForm.value;
      const updatedTechnicien = {
        nom: formValues.nom,
        competences: formValues.competences,
        machineAssignee: {
          id: formValues.machine
        }
      };
  
      this.technicienService.updateTechnicien(this.technicienId, updatedTechnicien).subscribe(
        () => {
          alert('Technicien updated successfully!');
          this.router.navigate(['/techniciens']);
        },
        (error) => {
          console.error('Error updating technicien:', error);
        }
      );
    }
  }
}