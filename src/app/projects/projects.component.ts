import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  contactData = [
    {
      contactIcon: 'bx bx-map',
      contactTitle: 'My Address',
      contactContent: 'Hanumkonda, warangal , Telangana - 506001'
    },
    
    {
      contactIcon: 'far fa-envelope',
      contactTitle: 'Email Me',
      contactContent: 'vishwan.gundu@gmail.com'
    },
    {
      contactIcon: 'fas fa-share',
      contactTitle: 'Social Profiles',
      contactContent: 'bi bi-twitter bi bi-facebookbi bi-instagram'
    },
    {
      contactIcon: 'fas fa-phone',
      contactTitle: 'Call Me',
      contactContent: '8886380485'
    },
    
  ];

}
