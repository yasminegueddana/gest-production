import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdreFabricationService } from '../../services/ordre-fabrication.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-ordre-fabrication-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './ordre-fabrication-list.component.html',
  styleUrls: ['./ordre-fabrication-list.component.css']
})
export class OrdreFabricationListComponent implements OnInit {
  ordres: any[] = []; // Use plain objects instead of models

  constructor(private ordreFabricationService: OrdreFabricationService) {}

  ngOnInit(): void {
    this.loadOrdres();
  }

  loadOrdres(): void {
    this.ordreFabricationService.getAllOrdres().subscribe(
      (data) => {
        this.ordres = data;
      },
      (error) => {
        console.error('Error loading ordres:', error);
      }
    );
  }

  deleteOrdre(id: number): void {
    if (confirm('Are you sure you want to delete this ordre?')) {
      this.ordreFabricationService.deleteOrdre(id).subscribe(
        () => {
          this.loadOrdres(); // Refresh the list after deletion
        },
        (error) => {
          console.error('Error deleting ordre:', error);
        }
      );
    }
  }
}