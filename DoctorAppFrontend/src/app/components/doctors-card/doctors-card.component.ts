import { Component } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private router: Router, private DoctorData: DataService) {

    this.route.paramMap.subscribe(params => {
      // Access the route parameters
      this.category = params.get('category');
      
      // If the category parameter is null, we set the default value as all
      if(this.category == null)
      this.category = 'All'
      
      // Receiving the doctor data from the data service

      if (this.category !='All' )
      {
        this.DoctorData.getSpecializedDoctorData(this.category).subscribe((response)=>{
            this.doctors= response.filter(x => x.SpecializationCode == this.category)
          // console.log(response)
            
        })
      }
      else{
        this.DoctorData.getDoctorData().subscribe((response) => {
          this.doctors = response;
      });  
    }
    if(!['All', 'ANE', 'GYN', 'CAR'].includes(this.category)){
      this.router.navigateByUrl('error-page')
    }
      // this.DoctorData.getDoctorData().subscribe((response) => {
        
        // Filtering data according to the category
        // if (this.category != 'All') {
        //   //  this.doctors = response.filter(x => x.specializationName == this.category)
        // }
        // else{
        //   this.doctors = response
        // }
      // });

      

    });
  }
  // used to assign the category
  category: any = 'All';

  doctors: IDrSpecialization[] = [];


    //CODE FOR POPUP
    showPopup = false;
    data:any;
    openPopup(data : any): void {
      this.data = data;
      this.showPopup = true;
    }
    
    onPopupClose(result: any): void {
  
      this.showPopup = false;
    }


}
