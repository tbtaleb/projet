import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/classes/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit{
  ngOnInit(): void {
    this.afficherFormation();
  }

  lesFormations: Formation[]=[];
  constructor(private formatioService:FormationService, ){}

  afficherFormation(){
    this.formatioService.getFormation().subscribe((data)=>{
      console.log(data);
      this.lesFormations=data
    });
  }

  
  
}
