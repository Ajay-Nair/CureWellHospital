import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IDoctor } from 'src/app/models/doctor.model';
import { ISurgery } from 'src/app/models/surgery.model';
import { IDrSpecialization } from 'src/app/models/drSpecialization.model';
import { ISpecialization } from 'src/app/models/specialization.model';

@Component({
  selector: 'app-doctors-card',
  templateUrl: './doctors-card.component.html',
  styleUrls: ['./doctors-card.component.css'],
})
export class DoctorsCardComponent {
  //receiving the category to be received from filter button
  constructor(private route: ActivatedRoute, private DoctorData: DataService) {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
    });
  }
  // used to assign the category
  category: any;

  //doctors: IDoctor[]=[];
  doctors: any;

  ngOnInit() {
    this.DoctorData.getDoctorData().subscribe((response) => {
      this.doctors = response;
      console.log(this.doctors);
    });
  }
}
