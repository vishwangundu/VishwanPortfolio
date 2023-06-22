import { Component } from '@angular/core';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  

   listItemData = [
    {
      icon: 'bi bi-chevron-right',
      label: 'Birthday',
      content: '12 Aug 2001'
    },
    {
      icon: 'bi bi-chevron-right',
      label: 'Website',
      content: 'www.vishwangundu.com'
    },
    {
      icon: 'bi bi-chevron-right',
      label: 'Phone',
      content: '+91 8886380485'
    },
    {
      icon: 'bi bi-chevron-right',
      label: 'City',
      content: 'Hyderabad, India'
    },
    {
      icon: 'bi bi-chevron-right',
      label: 'Degree',
      content: 'Btech in computer science engineering'
    },
    {
      icon: 'bi bi-chevron-right',
      label: 'Email',
      content: 'vishwangundu@gmail.com'
    },
    {
      icon: 'bi bi-chevron-right',
      label: 'Freelance',
      content: 'available'
    },
    {
      icon: 'bi bi-chevron-right',
      label: 'City',
      content: 'Hyderabad, India'
    }
  ];
  

}
