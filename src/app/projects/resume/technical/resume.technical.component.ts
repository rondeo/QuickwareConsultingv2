import { Component, Input, OnInit  } from '@angular/core';

import { IResumeSectionTechnical } from './IResumeSectionTechnical';

import { ResumeService } from '../resume.services';

@Component({
  selector: 'app-projects-resume-technical',
  templateUrl: './resume.technical.component.html',
  styleUrls: ['../resume.component.css'],
  providers: [ResumeService]
})
export class ProjectsResumeTechnicalComponent implements OnInit {

  results: IResumeSectionTechnical;

    constructor(
      private resumeService: ResumeService) {}

    ngOnInit(): void {
      this.resumeService.getResumeBySection('Technical')
        .then(x => this.results = x);
    }
}
