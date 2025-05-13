import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaintenanceService } from '../../services/maintenance.service';
import { Router } from '@angular/router';
import { TechnicienService } from '../../services/technicien.service';
import { MachineService } from '../../services/machine.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maintenance-form',
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './maintenance-form.component.html',
  styleUrls: ['./maintenance-form.component.css']
})
export class MaintenanceFormComponent implements OnInit {
  maintenanceForm!: FormGroup;
  machines: any[] = [];
  techniciens: any[] = [];

  constructor(
    private fb: FormBuilder,
    private maintenanceService: MaintenanceService,
    private machineService: MachineService,
    private technicienService: TechnicienService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.maintenanceForm = this.fb.group({
      type: ['', Validators.required],
      date: ['', Validators.required],
      machine: ['', Validators.required],
      technicien: ['', Validators.required]
    });

    this.machineService.getAllMachines().subscribe(data => this.machines = data);
    this.technicienService.getAllTechniciens().subscribe(data => this.techniciens = data);
  }
     goBack(): void {
    this.router.navigate(['/maintenances']);
  }

  onSubmit(): void {
    if (this.maintenanceForm.valid) {
      this.maintenanceService.createMaintenance(this.maintenanceForm.value).subscribe(() => {
        this.router.navigate(['/maintenances']);
      });
    }
  }
}
