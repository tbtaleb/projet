import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/classes/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-admin-formation-list',
  templateUrl: './admin-formation-list.component.html',
  styleUrls: ['./admin-formation-list.component.css'],
})
export class AdminFormationListComponent implements OnInit {
  lesFormation: Formation[] = [];

  constructor(private formationService: FormationService) {}
  ngOnInit(): void {
    this.formationService.getAllFormation().subscribe((data) => {
      this.lesFormation = data;
    });
  }

  deleteFormation(formationId: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      this.formationService.deleteFormation(formationId).subscribe(() => {
       
        this.lesFormation = this.lesFormation.filter(
          (formation) => formation.id !== formationId
        );
      });
    }
  }
}
