import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ModalModule } from 'ngx-bootstrap/modal';

import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { AboutComponent } from './home/about/about.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { GithubComponent } from './home/github/github.component';
import { EducationComponent } from './home/education/education.component';
import { BlogComponent } from './home/blog/blog.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { MusicComponent } from './home/music/music.component';
import { CreditComponent } from './home/credit/credit.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './home/information/information.component';
import { SkillsComponent } from './home/skills/skills.component';
import { CertificationsComponent } from './home/certifications/certifications.component';

import { ProjectsResumeComponent } from './projects/resume/resume.component';
import { ProjectsHeaderComponent } from './projects/header/header.component';
import { ProjectsResumeCompleteComponent } from './projects/resume/complete/resume.complete.component';
import { ProjectsResumeTechnicalComponent } from './projects/resume/technical/resume.technical.component';
import { ProjectsResumeExperienceComponent } from './projects/resume/experience/resume.experience.component';
import { ProjectsResumeCertificationComponent } from './projects/resume/certification/resume.certification.component';
import { ProjectsResumeEducationComponent } from './projects/resume/education/resume.education.component';
import { ProjectsResumeWebsiteComponent } from './projects/resume/website/resume.website.component';

import { ProjectsFunkoCollectionComponent } from './projects/funko-collection/funko-collection.component';
import { ProjectsFunkoCollectionPipe } from './projects/funko-collection/funko-collection.pipes.component';

import { ProjectsPickEmComponent } from './projects/pick-em/pick-em.component';
import { ProjectsPickEmDashboardComponent } from './projects/pick-em/dashboard/dashboard.component';
import { ProjectsPickEmDivisionCardComponent } from './projects/pick-em/dashboard/division-card/division-card.component';
import { ProjectsPickEmNewsCardComponent } from './projects/pick-em/dashboard/news-card/news-card.component';
import { ProjectsPickEmProfileCardComponent } from './projects/pick-em/dashboard/profile-card/profile-card.component';
import { ProjectsPickEmStatsCardComponent } from './projects/pick-em/dashboard/stats-card/stats-card.component';
import { ProjectsProPickEmNflStandingsComponent } from './projects/pick-em/nfl-standings/nfl-standings.component';
import { ProjectsProPickEmNflStandingsConferenceComponent } from './projects/pick-em/nfl-standings/conference/conference.component';
import { ProjectsProPickEmNflStandingsDivisionComponent } from './projects/pick-em/nfl-standings/division/division.component';
import { CardHeaderComponent } from './projects/pick-em/shared/components/card-header/card-header.component';
import { CardFooterComponent } from './projects/pick-em/shared/components/card-footer/card-footer.component';
import { ProjectsProPickEmNflUserStandingsComponent } from './projects/pick-em/user-standings/user-standings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    GithubComponent,
    EducationComponent,
    BlogComponent,
    ExperienceComponent,
    MusicComponent,
    CreditComponent,
    FooterComponent,
    HomeComponent,
    InformationComponent,
    SkillsComponent,
    CertificationsComponent,

    ProjectsResumeComponent,
    ProjectsHeaderComponent,
    ProjectsResumeCompleteComponent,
    ProjectsResumeTechnicalComponent,
    ProjectsResumeExperienceComponent,
    ProjectsResumeCertificationComponent,
    ProjectsResumeEducationComponent,
    ProjectsResumeWebsiteComponent,

    ProjectsFunkoCollectionComponent,
    ProjectsFunkoCollectionPipe,

    ProjectsPickEmComponent,
    ProjectsPickEmDashboardComponent,
    ProjectsPickEmDivisionCardComponent,
    ProjectsPickEmNewsCardComponent,
    ProjectsPickEmProfileCardComponent,
    ProjectsPickEmStatsCardComponent,
    ProjectsProPickEmNflStandingsComponent,
    ProjectsProPickEmNflStandingsConferenceComponent,
    ProjectsProPickEmNflStandingsDivisionComponent,
    CardHeaderComponent,
    CardFooterComponent,
    ProjectsProPickEmNflUserStandingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // MaterialModule,
    BrowserAnimationsModule,
    // NgbModule.forRoot(),
    // ModalModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
