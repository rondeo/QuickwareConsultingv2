import { Component, OnInit } from '@angular/core';
import { UserStandingsService } from '../shared/services/user-standings.service';
import { UserStandings } from '../../../../assets/data/user-standings.mock-data';

@Component({
  selector: 'app-projects-pick-em-user-standings',
  templateUrl: './user-standings.component.html',
  styleUrls: ['./user-standings.component.less'],
  providers: [ UserStandingsService ]
})
export class ProjectsProPickEmNflUserStandingsComponent implements OnInit {

  standings: UserStandings[];
  error: string;

  constructor(
    private userStandingsService: UserStandingsService) {}

  ngOnInit(): void {
    console.log(
      this.userStandingsService.fetchStandings().subscribe((response) => {
        this.standings = response;
        console.log('standings', this.standings);
      },
      error => this.error = error);
    );
  }

}
