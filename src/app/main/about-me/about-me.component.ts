import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [routerTransition],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '[@routerTransition]': '' },
})
export class AboutMeComponent implements OnInit {
  constructor(private domSanitizer: DomSanitizer) {}
  description =
    ' <h2> Меня зовут Анна Торгашина.</h2><br> Я дипломированный психолог.<br> Бизнес – тренер.<br> Опыт\n' +
    '    ведения тренингов с 2005 года.<br> Являюсь тренером-преподавателем школы\n' +
    '    бизнес-тренеров ICBT.<br> Гейм мейкер - знаю как создавать игры и игропрактик –\n' +
    '    знаю как вдохновлять <br> играми и формировать через них нужных знания и умения у\n' +
    '    участников.<br> Спикер на конференциях, форумах, фестивалях. Мотивационный\n' +
    '    спикер.<br> Вдохновляю на рост и развитие.';
  ngOnInit(): void {}

  sanitizer(title: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(title);
  }
}
