import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  All=10;
  App=2;
  CaseStudies=3;
  web=5;

  PortfolioData = [
    {
      projectImage: 'assets/bg.jpg',
      projectName: 'Planto-join the green side',
      projectContent: 'Empower Your Online Presence with Expert Web Development'
    },
    {

      projectImage: 'assets/per6.jpg',
      projectName: 'Planto-join the green side',
      projectContent: 'Empower Your Online Presence with Expert Web Development'
      
    },
    {

      projectImage: 'assets/person2.jpg',
      projectName: 'Planto-join the green side',
      projectContent: 'Empower Your Online Presence with Expert Web Development'
      
    },
    {
      projectImage: 'assets/bg.jpg',
      projectName: 'Planto-join the green side',
      projectContent: 'Empower Your Online Presence with Expert Web Development'
    },
    {

      projectImage: 'assets/per6.jpg',
      projectName: 'Planto-join the green side',
      projectContent: 'Empower Your Online Presence with Expert Web Development'
      
    },
    {

      projectImage: 'assets/person2.jpg',
      projectName: 'Planto-join the green side',
      projectContent: 'Empower Your Online Presence with Expert Web Development'
      
    },
    
    
    
  ];



}
