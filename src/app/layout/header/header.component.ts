import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  get tabIndex(): number {
    return this._tabIndex;
  }

  set tabIndex(value: number) {
    this._tabIndex = value;
  }
  _tabIndex: number = -1;

  constructor() {}

  test() {
    this._tabIndex = -1;
  }

  ngOnInit(): void {}
}
