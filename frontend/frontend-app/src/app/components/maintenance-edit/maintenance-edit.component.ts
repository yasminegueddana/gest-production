import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaintenanceService } from '../../services/maintenance.service';
import { TechnicienService } from '../../services/technicien.service';
import { MachineService } from '../../services/machine.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maintenance-edit',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './maintenance-edit.component.html',
  styleUrls: ['./maintenance-edit.component.css']
})
export class MaintenanceEditComponent implements OnInit {
  maintenanceForm!: FormGroup;
  machines: any[] = [];
  techniciens: any[] = [];
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private maintenanceService: MaintenanceService,
    private machineService: MachineService,
    private technicienService: TechnicienService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.maintenanceForm = this.fb.group({
      type: ['', Validators.required],
      date: ['', Validators.required],
      machine: ['', Validators.required],
      technicien: ['', Validators.required]
    });

    this.machineService.getAllMachines().subscribe(data => this.machines = data);
    this.technicienService.getAllTechniciens().subscribe(data => this.techniciens = data);

    this.maintenanceService.getMaintenanceById(this.id).subscribe(data => {
      this.maintenanceForm.patchValue(data);
    });
  }
    goBack(): void {
    this.router.navigate(['/maintenances']);
  }

  onSubmit(): void {
    if (this.maintenanceForm.valid) {
      this.maintenanceService.updateMaintenance(this.id, this.maintenanceForm.value).subscribe(() => {
        this.router.navigate(['/maintenances']);
      });
    }
  }
}
