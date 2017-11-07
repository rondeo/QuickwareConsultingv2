import { Component, Input, OnInit  } from '@angular/core';

import { IResumeSectionExperience } from './IResumeSectionExperience';

import { ResumeService } from '../resume.services';

@Component({
  selector: 'app-projects-resume-experience',
  templateUrl: './resume.experience.component.html',
  styleUrls: ['../resume.component.css'],
  providers: [ResumeService]
})
export class ProjectsResumeExperienceComponent implements OnInit {

  results: IResumeSectionExperience;

    constructor(
      private resumeService: ResumeService) {}

    ngOnInit(): void {
      this.resumeService.getResumeBySection('Experience')
        .then(x => this.results = x);
    }
}
