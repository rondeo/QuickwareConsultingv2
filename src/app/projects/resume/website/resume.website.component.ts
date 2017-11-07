import { Component, Input, OnInit  } from '@angular/core';

import { IResumeSectionWebsite } from './IResumeSectionWebsite';

import { ResumeService } from '../resume.services';

@Component({
  selector: 'app-projects-resume-website',
  templateUrl: './resume.website.component.html',
  styleUrls: ['../resume.component.css'],
  providers: [ResumeService]
})
export class ProjectsResumeWebsiteComponent implements OnInit {

  results: IResumeSectionWebsite;

    constructor(private resumeService: ResumeService) {}

    ngOnInit(): void {
      this.resumeService.getResumeBySection('Website')
        .then(results => this.results = results.Urls)
        .then(results => console.log('results', results));
    }
}
