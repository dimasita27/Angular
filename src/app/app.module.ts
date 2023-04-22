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
import { HomeComponent } from './main/home/home.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, IndexComponent, HeaderComponent, HomeComponent],
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
