import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  sideMenuToggle() {
    let sideBar = document.getElementById('sideBar');
    sideBar?.classList.toggle('active');

    let menuIcon = document.getElementById('menuIcon');
    menuIcon?.classList.toggle('rotate');
  }
}
