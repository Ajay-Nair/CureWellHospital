import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent {
  sideMenuToggle() {
    let sideBar = document.getElementById('side-menu')
    sideBar?.classList.toggle('hide-element')



    let menuIcon = document.getElementById('menuIcon')
    menuIcon?.classList.toggle('rotate')
  }
}
