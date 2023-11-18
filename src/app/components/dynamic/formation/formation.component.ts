import { Component, Input } from '@angular/core';
import { Form } from '@angular/forms';
import { Formation } from 'src/app/classes/formation';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
})
export class FormationComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() img!: string;
}
