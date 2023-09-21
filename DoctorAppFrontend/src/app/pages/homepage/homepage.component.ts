import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  sideMenuToggle() {
    let sideBar = document.getElementById('sideBar')
    sideBar?.classList.toggle('active')

    let menuIcon = document.getElementById('menuIcon')
    menuIcon?.classList.toggle('rotate')
  }
}
