import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  animations: [routerTransition],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '[@routerTransition]': '' },
})
export class GamesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
