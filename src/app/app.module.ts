import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { WorkExpoComponent } from './work-expo/work-expo.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    PersonalInfoComponent,
    EducationComponent,
    WorkExpoComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
