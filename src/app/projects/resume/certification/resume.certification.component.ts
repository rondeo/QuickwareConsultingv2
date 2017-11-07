import { Component, Input, OnInit  } from '@angular/core';

import { IResumeSectionCertification } from './IResumeSectionCertification';

import { ResumeService } from '../resume.services';

@Component({
  selector: 'app-projects-resume-certification',
  templateUrl: './resume.certification.component.html',
  styleUrls: ['../resume.component.css'],
  providers: [ResumeService]
})
export class ProjectsResumeCertificationComponent implements OnInit {

  results: IResumeSectionCertification;

    constructor(
      private resumeService: ResumeService) {}

    ngOnInit(): void {
      this.resumeService.getResumeBySection('Certification')
        .then(x => this.results = x);
    }
}
