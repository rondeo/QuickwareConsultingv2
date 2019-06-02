import { Component, OnInit, Input } from '@angular/core';

import { UserProfileCard } from '@assets/data/user-profile.card.mock-data';
import { DashboardService } from '../../shared/services/dashboard.service';

@Component({
  selector: 'app-projects-pick-em-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: [
    './profile-card.component.css',
    '../../shared/styles/card.component.css'
  ],
  providers: [DashboardService]
})
export class ProjectsPickEmProfileCardComponent implements OnInit {

  @Input() playerId: number;

  profile: UserProfileCard;
  error: string;

  constructor(
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    // this.dashboardService.getProfileCard(this.playerId)
    //     .subscribe((response) => {
    //         this.profile = response;

    //         // console.table(response);
    //     },
    //     error => this.error = error);

    this.dashboardService.getProfileCard(this.playerId)
      .then(response => this.profile = response);
  }
}
