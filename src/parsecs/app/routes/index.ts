import { Route } from '@angular/router';
import { HomeRoute } from './home';
import { NewCampaignRoute } from './new-campaign';

export const RouteComponents = [
  HomeRoute,
  NewCampaignRoute
]

export const Routes: Route[] = [
  { path: 'new-campaign', component: NewCampaignRoute },
  { path: '', component: HomeRoute },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]
