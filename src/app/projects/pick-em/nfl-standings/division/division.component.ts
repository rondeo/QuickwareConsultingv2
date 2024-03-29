import { Component, OnInit, Input  } from '@angular/core';

import { Team } from '@assets/data/nfl-standings.mock-data';
import { TeamService } from '../../shared/services/team.service';

@Component({
  selector: 'app-projects-pick-em-nfl-standings-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.less'],
  providers: [TeamService]
})
export class ProjectsProPickEmNflStandingsDivisionComponent implements OnInit {

  @Input() conference: string;
  @Input() name: string;
  @Input() showDivisionName: boolean;

  teams: Team[];
  teams2: Team[];
  error: string;

  constructor(
    private teamService: TeamService) {
      // this.getTeams();
    }

  ngOnInit(): void {
    this.getTeamsByConferenceAndDivision(this.conference, this.name);
  }

  getTeams() {
      this.teamService.fetchTeamsByConferenceAndDivision('AFC', 'West')
        .subscribe((response) => {
            this.teams2 = response;

            // console.log('teams2', this.teams2);
        },
        error => this.error = error);
  }

  getTeamsByConferenceAndDivision(conference: string, name: string): void {
    this.teamService.getTeamsByConferenceAndDivision(conference, name)
      .then(teams => this.teams = teams);
  }

  showModal(city: string, name: string): void {
    console.log(city, name);

    // const modalRef = this.modalService.open(TeamDetailModalComponent);
    // modalRef.componentInstance.name = 'World';
  }

}
