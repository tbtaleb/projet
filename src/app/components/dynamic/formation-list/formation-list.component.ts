import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/classes/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css'],
})
export class FormationListComponent implements OnInit {
  selectedTraining: any | null = null;
  ngOnInit(): void {
    this.formatioService.getFormation().subscribe((data) => {
      this.lesFormations = data;
    });
  }

  lesFormations: Formation[] = [];
  constructor(
    private formatioService: FormationService,
    private router: Router
  ) {}

  showDetails(training: any): void {
    this.selectedTraining = training;
  }

  clearDetails(): void {
    this.selectedTraining = null;
  }

  onClick(id: number) {
    // Naviguer vers la nouvelle page lorsque la div est cliquée
    this.router.navigate(['/formationList/'+id]);
    
  }
}
