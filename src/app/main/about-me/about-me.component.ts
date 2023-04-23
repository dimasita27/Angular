import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations';

@Component({
  selector: 'home',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [routerTransition],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '[@routerTransition]': '' },
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
