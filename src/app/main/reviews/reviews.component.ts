import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  animations: [routerTransition],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '[@routerTransition]': '' },
})
export class ReviewsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
