import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineService } from '../../services/machine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machine-list',
  imports: [CommonModule],
  templateUrl: './machine-list.component.html',
  styleUrl: './machine-list.component.css'
})
export class MachineListComponent implements OnInit {
  machines: any[] = []; // Array to hold the list of machines

  constructor(private machineService: MachineService, private router: Router) {}

  ngOnInit(): void {
    this.loadMachines();
  }

  // Fetch all machines from the backend
  loadMachines(): void {
    this.machineService.getAllMachines().subscribe(
      (data: any[]) => {
        this.machines = data; // Assign the fetched data to the machines array
      },
      (error) => {
        console.error('Error fetching machines:', error);
      }
    );
  }

  // Delete a machine by ID
  deleteMachine(id: number): void {
    if (confirm('Are you sure you want to delete this machine?')) {
      this.machineService.deleteMachine(id).subscribe(
        () => {
          this.loadMachines(); // Refresh the list after deletion
        },
        (error) => {
          console.error('Error deleting machine:', error);
        }
      );
    }
  }

  // Navigate to the "Add Machine" page
  addMachine(): void {
    this.router.navigate(['/machines/add']);
  }

  // Navigate to the "Edit Machine" page
  editMachine(id: number): void {
    this.router.navigate(['/machines/edit', id]);
  }
}
