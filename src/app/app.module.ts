import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiRootModule,
  TuiDialogModule,
  TUI_SANITIZER,
  TuiAlertModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n';
import { of } from 'rxjs';
import { IndexComponent } from './main/index/index.component';
import { HeaderComponent } from './layout/header/header.component';
import { TuiTabsModule } from '@taiga-ui/kit';
import { CommonModule } from '@angular/common';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { AboutMeComponent } from './main/about-me/about-me.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TrainingsComponent } from './main/trainings/trainings.component';
import { GamesComponent } from './main/games/games.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { MentoringComponent } from './main/mentoring/mentoring.component';
import { ReviewsComponent } from './main/reviews/reviews.component';

export function factoryTranslateHttpLoader(
  httpClient: HttpClient
): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, './assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    AboutMeComponent,
    TrainingsComponent,
    GamesComponent,
    ContactsComponent,
    MentoringComponent,
    ReviewsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiTabsModule,
    TuiTabsModule,
    TuiTabsModule,
    TuiSvgModule,
    TuiAvatarModule,

    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ru',
      loader: {
        provide: TranslateLoader,
        useFactory: factoryTranslateHttpLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
