import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  constructor(private router: Router){

  }

  sideMenuToggle() {
    let sideBar = document.getElementById('sideBar');
    sideBar?.classList.toggle('active');

    let menuIcon = document.getElementById('menuIcon');
    menuIcon?.classList.toggle('rotate');
  }

  sendCategory(category: string){
    this.router.navigate(['/details', category]);
  }
}
