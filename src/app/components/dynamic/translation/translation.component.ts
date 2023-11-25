import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css'],
})
export class TranslationComponent implements OnInit {
  sourceLanguages: string[] = [];
  targetLanguages: string[] = [];
  selectedSourceLanguage: string = '';
  selectedTargetLanguage: string = '';
  inputText: string = '';
  translatedText: string = '';

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
     this.translationService.getLanguages().subscribe((languages) => {
       this.sourceLanguages = languages;
       this.targetLanguages = [...languages];
     });
  }

  // translateText(): void {
  //   this.translationService
  //     .translateText(
  //       this.selectedSourceLanguage,
  //       this.selectedTargetLanguage,
  //       this.inputText
  //     )
  //     .subscribe((result) => (this.translatedText = result));
  // }
}
