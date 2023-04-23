import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './main/index/index.component';

import { AboutMeComponent } from './main/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'trainings', component: AboutMeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
