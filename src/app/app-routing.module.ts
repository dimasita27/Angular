import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './main/index/index.component';

import { AboutMeComponent } from './main/about-me/about-me.component';
import { TrainingsComponent } from './main/trainings/trainings.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { GamesComponent } from './main/games/games.component';
import { MentoringComponent } from './main/mentoring/mentoring.component';
import { ReviewsComponent } from './main/reviews/reviews.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'trainings', component: TrainingsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'mentoring', component: MentoringComponent },
  { path: 'reviews', component: ReviewsComponent },
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
