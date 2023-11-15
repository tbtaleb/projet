import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/classes/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.afficherFormation();
  }

  lesFormations: Formation[] = [];
  constructor(private formatioService: FormationService) {}

  afficherFormation() {
    this.formatioService.getFormation().subscribe((data) => {
      console.log(data);
      this.lesFormations = data;
    });
  }
}
