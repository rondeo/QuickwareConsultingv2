import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-pick-em-division-card',
  templateUrl: './division-card.component.html',
  styleUrls: [
    './division-card.component.css',
    '../../shared/styles/card.component.css'
  ]
})
export class ProjectsPickEmDivisionCardComponent implements OnInit {

  @Input() division: string;

  constructor() { }

  ngOnInit() {
  }

}
