import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  lesFormations: Formation[] = [];
  searchValue='';
  typeValue ='';

  constructor(
    private formatioService: FormationService,
    private router: Router,
    private fb: FormBuilder,
  ) {}
  
  searchForm = this.fb.nonNullable.group({
    searchValue:'',
    typeValue:'',
  });

  ngOnInit(): void {
    this.fetchData();
    
  }

  fetchData(): void {
    this.formatioService.getFormation(this.searchValue, this.typeValue).subscribe((data) => {
        this.lesFormations = data;
    });
}

  

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

  onSearchSubmit():void{
    this.typeValue = this.searchForm.value.typeValue ?? '';
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }
}
