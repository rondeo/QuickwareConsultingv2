import { TeamService } from '../shared/services/team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [TeamService]
})
export class ProjectsPickEmDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
