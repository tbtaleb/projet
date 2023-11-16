import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/classes/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit{
  selectedTraining: any | null = null;
  ngOnInit(): void {
    
      this.formatioService.getFormation().subscribe((data)=>{
        console.log(data);
        this.lesFormations=data
      });
    
  }

  lesFormations: Formation[]=[];
  constructor(private formatioService:FormationService, ){}

  

  showDetails(training: any): void {
    this.selectedTraining = training;
  }

  clearDetails(): void {
    this.selectedTraining = null;
  }
  
}
