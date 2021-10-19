import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './content/locations/locations.component';
import { OverviewComponent } from './content/overview/overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    component: OverviewComponent,
    data: {
      header: 'Overview',
      description: 'Get summary of your recent usage & insights',
    },
  },
  {
    path: 'locations',
    component: LocationsComponent,
    data: {
      header: 'Locations',
      description: 'Overview of your locations, licences and products',
      canAdd: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
