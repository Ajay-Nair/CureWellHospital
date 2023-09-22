import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDoctorsComponent } from './pages/view-doctors/view-doctors.component';
import { ViewSpecializationsComponent } from './pages/view-specializations/view-specializations.component';
import { ViewScheduleComponent } from './pages/view-schedule/view-schedule.component';
import { DoctorsCardComponent } from './components/doctors-card/doctors-card.component';

const routes: Routes = [
  {
    path: 'viewDoctors',
    component: DoctorsCardComponent,
  },
  {
    path: 'viewSpecialization',
    component: ViewSpecializationsComponent,
  },
  {
    path: 'viewSchedule',
    component: ViewScheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
