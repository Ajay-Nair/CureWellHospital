import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpecializationService } from 'src/app/services/specialization.service';

@Component({
  selector: 'app-view-specializations',
  templateUrl: './view-specializations.component.html',
  styleUrls: ['./view-specializations.component.css']
})
export class ViewSpecializationsComponent {
  specializations:any;
  /**
   *
   */
  constructor(private specialization:SpecializationService, private router: Router) {
  }

  showDoctors(category: string){
    this.router.navigate(['/viewDoctors', category]);  }
  ngOnInit(){
    this.specialization.getSpecialization().subscribe(response => {
      this.specializations = response;
      console.log(this.specializations)
    })
  }
}
