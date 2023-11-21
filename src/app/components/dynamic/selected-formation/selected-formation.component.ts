import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Commentaire } from 'src/app/classes/commentaire';
import { User } from 'src/app/classes/user';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

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
  lesUsers: User[]|undefined;
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


  getUser(userId: number): Observable<User|undefined> {
    return this.userService.getUserById(userId);
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
    const newComment: Commentaire = {
      id: this.generateUniqueId(),
      idUser: loggedInUserId,
      text: this.commentForm.value.comment,
    };

    this.formationService.addComment(this.idf, newComment).subscribe((data) => {
      this.selectedTraining.comments.push(data);
      this.commentForm.reset();
    });
  }

  private generateUniqueId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }
}
