import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { OverviewComponent } from './content/overview/overview.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LocationsComponent } from './content/locations/locations.component';
import { CardComponent } from './content/overview/components/card/card.component';
import { BillingSummaryComponent } from './content/overview/components/billing-summary/billing-summary.component';
import { LocationsSummaryComponent } from './content/overview/components/locations-sum/locations-sum.component';
import { ModuleUsageComponent } from './content/overview/components/module-usage/module-usage.component';
import { AdministratorsComponent } from './content/overview/components/administrators/administrators.component';
import { AddLocationModalComponent } from './navigation/components/add-location-modal/add-location-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    LocationsComponent,
    SidebarComponent,
    ContentComponent,
    NavigationComponent,
    CardComponent,
    BillingSummaryComponent,
    LocationsSummaryComponent,
    ModuleUsageComponent,
    AdministratorsComponent,
    AddLocationModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
