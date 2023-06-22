import { Component } from '@angular/core';

@Component({
  selector: 'app-work-expo',
  templateUrl: './work-expo.component.html',
  styleUrls: ['./work-expo.component.css']
})
export class WorkExpoComponent {

  listServiceData = [
    {
      serviceIcon: 'fas fa-code',
      serviceTitle: 'Web Developer',
      serviceContent: 'Empower Your Online Presence with Expert Web Development'
    },
    {
      serviceIcon: 'fab fa-android',
      serviceTitle: 'Android Developer',
      serviceContent: 'Unlocking Innovation with Expert Android Development'
    },
    {
      serviceIcon: 'fas fa-pencil-ruler',
      serviceTitle: 'UI/UX Developer',
      serviceContent: 'Driving User Engagement with Stunning UI/UX Solutions'
    },
    
  ];

}
