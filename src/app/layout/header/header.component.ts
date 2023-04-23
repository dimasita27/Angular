import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  ViewChild,
  HostListener,
} from '@angular/core';
import { TuiHostedDropdownComponent, TuiSizeL, TuiSizeS } from '@taiga-ui/core';
import { menuLink, Menu } from '../../interface/trainings';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get tabIndex(): number {
    return this._tabIndex;
  }

  set tabIndex(value: number) {
    this._tabIndex = value;
  }

  menuLink: Menu[] = menuLink;

  open = false;
  _tabIndex: number = -1;
  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  home(): void {
    this._tabIndex = -1;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): string {
    if (window.innerWidth > 1000) {
      return 'big';
    } else {
      return 'small';
    }
  }

  onClick(): void {
    this.open = false;

    this.component?.nativeFocusableElement?.focus();
    this.changeDetectorRef.detectChanges();
  }
}
