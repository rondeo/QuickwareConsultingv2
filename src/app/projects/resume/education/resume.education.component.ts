import { Component, Input, OnInit  } from '@angular/core';

import { IResumeSectionEducation } from './IResumeSectionEducation';

import { ResumeService } from '../resume.services';

@Component({
  selector: 'app-projects-resume-education',
  templateUrl: './resume.education.component.html',
  styleUrls: ['../resume.component.css'],
  providers: [ResumeService]
})
export class ProjectsResumeEducationComponent implements OnInit {

  results: IResumeSectionEducation;

    constructor(
      private resumeService: ResumeService) {}

    ngOnInit(): void {
      this.resumeService.getResumeBySection('Education')
        .then(x => this.results = x);
    }
}
