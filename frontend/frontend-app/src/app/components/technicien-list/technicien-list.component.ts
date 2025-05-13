import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TechnicienService } from '../../services/technicien.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-technicien-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './technicien-list.component.html',
  styleUrl: './technicien-list.component.css'
})
export class TechnicienListComponent implements OnInit{
  techniciens: any[] = [];
  
    constructor(private technicienService: TechnicienService,
       private router: Router 
    ) 
    {}
  
    ngOnInit(): void {
      this.loadTechniciens();
    }
  
    loadTechniciens(): void {
      this.technicienService.getAllTechniciens().subscribe(
        (data) => {
          this.techniciens = data;
        },
        (error) => {
          console.error('Error fetching techniciens:', error);
        }
      );
    }
     addTechnicien(): void {
    this.router.navigate(['/techniciens/add']);
  }

    editTechnicien(id: number): void {
    this.router.navigate(['/techniciens/edit', id]); // Navigate to edit route
  }
  
    deleteTechnicien(id: number): void {
      if (confirm('Are you sure you want to delete this technicien?')) {
        this.technicienService.deleteTechnicien(id).subscribe(
          () => {
            this.loadTechniciens(); // Refresh the list after deletion
          },
          (error) => {
            console.error('Error deleting technicien:', error);
          }
        );
      }
    }
  }


