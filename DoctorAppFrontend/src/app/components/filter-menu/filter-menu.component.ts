import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent {

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      if (params.get('category')) {
        this.DoctorCategory = params.get('category')
      }
      else {
        this.DoctorCategory = 'All'
      }
    })
  }

  DoctorCategory: any;

  switchCategory(category: string) {
    //to display the category heading
    this.DoctorCategory = category
    //to send the category to doctor card component to filter out the data
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
