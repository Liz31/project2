import { Routes } from '@angular/router';

import { AboutMeComponent } from './about-me';
import { HomeComponent } from './home';
import { MoodBoardComponent } from './mood-board';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'mood-board', component: MoodBoardComponent },
  { path: 'about-me', component: AboutMeComponent },

  { path: '**',    component: NoContentComponent },
];
