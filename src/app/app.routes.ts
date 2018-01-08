import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsResumeComponent } from './projects/resume/resume.component';
import { ProjectsResumeCompleteComponent } from './projects/resume/complete/resume.complete.component';
import { ProjectsResumeTechnicalComponent } from './projects/resume/technical/resume.technical.component';
import { ProjectsResumeExperienceComponent } from './projects/resume/experience/resume.experience.component';
import { ProjectsResumeCertificationComponent } from './projects/resume/certification/resume.certification.component';
import { ProjectsResumeEducationComponent } from './projects/resume/education/resume.education.component';
import { ProjectsResumeWebsiteComponent } from './projects/resume/website/resume.website.component';

import { ProjectsFunkoCollectionComponent } from './projects/funko-collection/funko-collection.component';

import { ProjectsPickEmComponent } from './projects/pick-em/pick-em.component';
import { ProjectsPickEmDashboardComponent } from './projects/pick-em/dashboard/dashboard.component';
import { ProjectsProPickEmNflStandingsComponent } from './projects/pick-em/nfl-standings/nfl-standings.component';
import { ProjectsProPickEmNflUserStandingsComponent } from './projects/pick-em/user-standings/user-standings.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      data: { title: 'Quickware Consulting: Home' }
    },
    {
      path: 'projects/resume',
      component: ProjectsResumeComponent,
      data: { title: 'Quickware Consulting: My Resume' },
      children: [
        { path: '', redirectTo: 'complete', pathMatch: 'full' },
        { path: 'complete', component: ProjectsResumeCompleteComponent },
        { path: 'technical', component: ProjectsResumeTechnicalComponent },
        { path: 'experience', component: ProjectsResumeExperienceComponent },
        { path: 'certifications', component: ProjectsResumeCertificationComponent },
        { path: 'education', component: ProjectsResumeEducationComponent },
        { path: 'website', component: ProjectsResumeWebsiteComponent }
      ]
    },
    {
      path: 'projects/funkoCollection',
      component: ProjectsFunkoCollectionComponent,
      data: { title: 'Quickware Consulting: Funko Collection' }
    },
    {
      path: 'projects/pickem',
      component: ProjectsPickEmComponent,
      data: { title: 'Quickware Consulting: Pro Pick \'Em' },
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: ProjectsPickEmDashboardComponent },
        { path: 'nflStandings', component: ProjectsProPickEmNflStandingsComponent },
        { path: 'userStandings', component: ProjectsProPickEmNflUserStandingsComponent }
      ]
    },
];
