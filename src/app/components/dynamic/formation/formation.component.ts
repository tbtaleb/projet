import { Component, Input } from '@angular/core';
import { Formation } from 'src/app/classes/formation';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
})
export class FormationComponent {
  @Input() train!: Formation;
}
