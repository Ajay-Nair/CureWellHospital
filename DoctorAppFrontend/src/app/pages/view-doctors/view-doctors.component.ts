import { Component } from '@angular/core';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css'],
})
export class ViewDoctorsComponent {
  sideMenuToggle() {
    let sideBar = document.getElementById('sideBar');
    sideBar?.classList.toggle('active');

    let menuIcon = document.getElementById('menuIcon');
    menuIcon?.classList.toggle('rotate');
  }
}
