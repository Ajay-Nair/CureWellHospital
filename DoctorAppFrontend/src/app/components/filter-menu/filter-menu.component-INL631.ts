import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent {
  DoctorCategory = 'All';
  switchCategory(category: string){
    this.DoctorCategory = category;
  }
}
