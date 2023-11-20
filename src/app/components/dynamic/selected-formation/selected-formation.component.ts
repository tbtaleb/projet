import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from 'src/app/classes/commentaire';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-selected-formation',
  templateUrl: './selected-formation.component.html',
  styleUrls: ['./selected-formation.component.css'],
})
export class SelectedFormationComponent implements OnInit {
  idf: number = 0;
  selectedTraining: any;
  newComment : any={ idUser: 0, text: '' };;
  lesComments: Commentaire[] | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formationService: FormationService
  ) {}

  ngOnInit(): void {
    this.idf = this.activatedRoute.snapshot.params['idf'];

    this.formationService.getFormationById(this.idf).subscribe((data) => {
      this.lesComments = data?.comments;
    });

    this.formationService.getFormationById(this.idf).subscribe({
      next: (formation) => {
        this.selectedTraining = formation;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  GoBack() {
    this.router.navigate(['/events']);
  }
  
  addComment(formationId: number, newComment: Commentaire): void {
    this.formationService.addComment(formationId, newComment);
  }
}
