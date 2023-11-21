import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Commentaire } from 'src/app/classes/commentaire';
import { Formation } from 'src/app/classes/formation';
import { User } from 'src/app/classes/user';
import { Helpers } from 'src/app/helpers/helpers';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-selected-formation',
  templateUrl: './selected-formation.component.html',
  styleUrls: ['./selected-formation.component.css'],
})
export class SelectedFormationComponent implements OnInit {

  idf: number = 0;
  selectedTraining?: Formation;
  newComment : Commentaire= new Commentaire(0,'',undefined)
  lesComments?: Commentaire[];
  lesUsers?: User[];
  commentForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formationService: FormationService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {} 

 

  ngOnInit(): void {
    this.idf = this.activatedRoute.snapshot.params['idf'];

    this.commentForm = this.formBuilder.nonNullable.group({
      comment: [''],
    })

    this.userService.getUsers().subscribe(data =>{
      this.lesUsers = data;
    })

    this.formationService.getFormationById(this.idf).subscribe({
      next: (formation) => {
        this.selectedTraining = formation;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  getUser(userId: number):any {
    this.userService.getUserById(userId).subscribe(data => {
      console.log(data);
      
      return data;
    })
  }

  GoBack() {
    this.router.navigate(['/formationList']);
  }
  // onSubmitComment() {
  //   this.formationService.addComment(this.idf, this.commentForm.value).subscribe((data) => {
  //     this.selectedTraining.comments.push(data);
  //     this.newComment.text = '';
  //   });
  //  }
  onSubmitComment() {
    const loggedInUserId = 1; // Replace with the actual logged-in user ID
    
    const newComment: Commentaire = new Commentaire(
      Helpers.generateUniqueId(),
      this.commentForm.value.comment,
      loggedInUserId,
    )

    this.formationService.addComment(this.idf, newComment).subscribe(
      {
        next:(data) => {
          if (!data) return

          this.selectedTraining!.comments.push(data);
          this.commentForm.reset();
        }
      }
    );
  }


}
