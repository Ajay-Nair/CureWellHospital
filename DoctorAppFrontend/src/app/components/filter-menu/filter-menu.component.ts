import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISpecialization } from 'src/app/models/specialization.model';
import { DataService } from 'src/app/services/data.service';
import { SpecializationService } from 'src/app/services/specialization.service';


@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent {
  specializations: ISpecialization[] = [];


  //To Display Heading Function
  Displayheading(data:string) : void
  {
    if(data=='All')
    this.display = 'All'
  else
    this.display = this.specializations.filter(x=>x.SpecializationCode==data)[0].SpecializationName
  }


  
  constructor(private router: Router, private route: ActivatedRoute, private specialization: SpecializationService ) {
    this.route.paramMap.subscribe(params => {
      if (params.get('category')) {
        this.DoctorCategory = params.get('category')
      }
      else {
        this.DoctorCategory = 'All'
       
      }

     
    })


    

  }
  
    ngOnInit(){
      this.specialization.getsp().subscribe(response => {
   
        this.specializations = response;
        this.Displayheading(this.DoctorCategory)
      })
      
    }
  
  DoctorCategory:any ;
  display : any ;

  switchCategory(category: string) {

    //to display the category heading when using 
    this.Displayheading(category);
    // to send the category to doctor card component to filter out the data
    this.router.navigate(['/viewDoctors', category]);

    
  }
  //CODE FOR POPUP
  showPopup = false;
  openPopup(): void {
    this.showPopup = true;
  }
  
  onPopupClose(result: any): void {

    this.showPopup = false;
}
}
