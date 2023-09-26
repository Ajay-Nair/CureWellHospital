import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { DoctorsCardComponent } from './components/doctors-card/doctors-card.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateSurgeryComponent } from './components/update-surgery/update-surgery.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';

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
    ViewScheduleComponent,
    DoctorsCardComponent,
    MenuButtonComponent,
    UpdateSurgeryComponent,
    AddDoctorComponent,
    EditDoctorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
