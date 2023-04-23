import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations';
import { trainingsArray } from '../../interface/trainings';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
  animations: [routerTransition],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '[@routerTransition]': '' },
})
export class TrainingsComponent implements OnInit {
  constructor(private domSanitizer: DomSanitizer) {}

  trainingsArray = trainingsArray;

  ngOnInit(): void {}

  sanitizer(title: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(title);
  }
}
