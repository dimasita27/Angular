import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [routerTransition],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '[@routerTransition]': '' },
})
export class ContactsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
