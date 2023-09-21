import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { SpecializationListComponent } from './components/specialization-list/specialization-list.component';
import { SurgeryListComponent } from './components/surgery-list/surgery-list.component';
import { FilterMenuComponent } from './components/filter-menu/filter-menu.component';
import { ViewDoctorsComponent } from './pages/view-doctors/view-doctors.component';
import { ViewSpecializationsComponent } from './pages/view-specializations/view-specializations.component';
import { ViewScheduleComponent } from './pages/view-schedule/view-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TitleBarComponent,
    SideBarComponent,
    MainContentComponent,
    DoctorListComponent,
    SpecializationListComponent,
    SurgeryListComponent,
    FilterMenuComponent,
    ViewDoctorsComponent,
    ViewSpecializationsComponent,
    ViewScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
