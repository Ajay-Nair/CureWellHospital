import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDoctorsComponent } from './pages/view-doctors/view-doctors.component';
import { ViewSpecializationsComponent } from './pages/view-specializations/view-specializations.component';
import { DoctorsCardComponent } from './components/doctors-card/doctors-card.component';
import { SurgeryListComponent } from './components/surgery-list/surgery-list.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorsCardComponent
  },
  {
    path: 'viewDoctors',
    component: DoctorsCardComponent,
  },
  {
    path: 'viewDoctors/:category',
    component: DoctorsCardComponent,
  },
  {
    path: 'viewSpecialization',
    component: ViewSpecializationsComponent,
  },
  {
    path: 'viewSchedule',
    component: SurgeryListComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
