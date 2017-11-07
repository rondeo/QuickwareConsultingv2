import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-pick-em-nfl-standings-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ProjectsProPickEmNflStandingsConferenceComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
    console.log(this.name);
  }

}
