import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctors-card',
  templateUrl: './doctors-card.component.html',
  styleUrls: ['./doctors-card.component.css'],
})
export class DoctorsCardComponent {
  //receiving the category to be received from filter button
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.category = params['category']

    });
  }
  // used to assign the category
  category: any;

  // doctor data
  doctors = [
    {
      id: 1,
      name: 'Mark',
      url: 'https://i.pinimg.com/originals/eb/36/af/eb36af4cd6a2295a22ac7cdb31b0f1a0.jpg',
      specification: 'Pediatrician',
    },
    {
      id: 2,
      name: 'Paul',
      url: 'https://getwallpapers.com/wallpaper/full/a/d/9/302389.jpg',
      specification: 'Pediatrician',
    },
    {
      id: 3,
      name: 'John',
      url: 'https://irp-cdn.multiscreensite.com/d8037e1a/dms3rep/multi/Functional+Medicine+Doctor+Chicago.jpeg',
      specification: 'Pediatrician',
    },
    {
      id: 4,
      name: 'Smith',
      url: 'https://i.pinimg.com/originals/eb/36/af/eb36af4cd6a2295a22ac7cdb31b0f1a0.jpg',
      specification: 'Pediatrician',
    },
    {
      id: 5,
      name: 'Rangel',
      url: 'https://i.pinimg.com/originals/eb/36/af/eb36af4cd6a2295a22ac7cdb31b0f1a0.jpg',
      specification: 'Pediatrician',
    },
  ];
}
