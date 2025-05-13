import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from '../../services/maintenance.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maintenance-list',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.css']
})
export class MaintenanceListComponent implements OnInit {
  maintenances: any[] = [];

  constructor(private maintenanceService: MaintenanceService, private router: Router) {}

  ngOnInit(): void {
    this.loadMaintenances();
  }

  loadMaintenances(): void {
    this.maintenanceService.getAllMaintenances().subscribe(data => {
      this.maintenances = data;
    });
  }
    addMaintenance(): void {
    this.router.navigate(['/maintenances/add']);
  }

  deleteMaintenance(id: number): void {
    if (confirm('Confirmer la suppression ?')) {
      this.maintenanceService.deleteMaintenance(id).subscribe(() => {
        this.loadMaintenances();
      });
    }
  }

  editMaintenance(id: number): void {
    this.router.navigate(['/maintenances/edit', id]);
  }
}
