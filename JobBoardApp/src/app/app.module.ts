import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { JobApplicationComponent } from './job-application/job-application.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListingsComponent,
    UserProfileComponent,
    JobApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
