import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private router:Router){}
  Formation = [
    {
      id: 1,
      name: 'Trainings',
      img: '../../../../assets/austin-distel-rxpThOwuVgE-unsplash.jpg',
    },
    {
      id: 2,
      name: 'Events',
      img: '../../../../assets/austin-distel-rxpThOwuVgE-unsplash.jpg',
    },
  ];
  GoTo(){
    this.router.navigate(["/events"])
  }
}
