import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MachineService } from '../../services/machine.service';

@Component({
  selector: 'app-machine-edit',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './machine-edit.component.html',
  styleUrls: ['./machine-edit.component.css']
})
export class MachineEditComponent implements OnInit {
  machineForm: FormGroup;
  machineId: number | null = null; // ID of the machine being edited

  constructor(
    private fb: FormBuilder,
    private machineService: MachineService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Initialize the form with required fields
    this.machineForm = this.fb.group({
      nom: ['', Validators.required], // Machine name (required)
      etat: ['', Validators.required], // Machine state (required)
      prochaineMaintenance: ['', Validators.required] //maintenance date (required)
    });
  }

  ngOnInit(): void {
    // Extract the machine ID from the route parameters
    this.route.params.subscribe((params) => {
      this.machineId = +params['id']; // Convert the ID to a number
      if (this.machineId) {
        this.loadMachine(this.machineId);
      }
    });
  }

  // Fetch the machine details by ID
  loadMachine(id: number): void {
    this.machineService.getMachineById(id).subscribe(
      (machine) => {
        // Populate the form with the fetched machine data
        this.machineForm.patchValue(machine);
      },
      (error) => {
        console.error('Error loading machine:', error);
      }
    );
  }

  // Submit the updated form data to the backend
  onSubmit(): void {
    if (this.machineForm.valid && this.machineId !== null) {
      const updatedMachine = this.machineForm.value;
      this.machineService.updateMachine(this.machineId, updatedMachine).subscribe(
        () => {
          // Redirect to the machine list page after successful update
          this.router.navigate(['/machines']);
        },
        (error) => {
          console.error('Error updating machine:', error);
        }
      );
    }
  }

  // Navigate back to the machine list page
  goBack(): void {
    this.router.navigate(['/machines']);
  }
}