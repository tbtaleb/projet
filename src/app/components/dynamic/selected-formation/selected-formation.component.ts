import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-selected-formation',
  templateUrl: './selected-formation.component.html',
  styleUrls: ['./selected-formation.component.css']
})
export class SelectedFormationComponent implements OnInit {
  idf:number =0;
  selectedTraining: any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private formationService:FormationService
    ){}
  ngOnInit(): void {
    this.idf= this.activatedRoute.snapshot.params['idf'];
    this.selectedTraining=this.formationService.getFormationById(this.idf);
  }

  GoBack(){
    this.router.navigate(['/formationList']);
  }
}