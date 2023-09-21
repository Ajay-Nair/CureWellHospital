import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDoctorsComponent } from './pages/view-doctors/view-doctors.component';
import { ViewSpecializationsComponent } from './pages/view-specializations/view-specializations.component';

const routes: Routes = [
  {
    path: 'viewDoctors', component: ViewDoctorsComponent
  },
  {
    path: 'viewSpecialization', component: ViewSpecializationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
