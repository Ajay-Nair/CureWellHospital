import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent {

  constructor(private router: Router) {
    this.DoctorCategory = 'All'
  }

  DoctorCategory:string;

  switchCategory(category: string) {
    //to display the category heading
    this.DoctorCategory = category
    //to send the category to doctor card component to filter out the data
    this.router.navigate(['/viewDoctors', category]);
  }
}
