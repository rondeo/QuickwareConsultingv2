import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { UserProfileCard } from '@assets/data/user-profile.card.mock-data';

@Injectable()
export class DashboardService {

  private profileCardDataUrl = '/assets/data/user-profile.card.json';

  constructor(private http: Http) {}

  getProfileCard(playerId: number): Promise<UserProfileCard> {
    // return this.http.get(this.profileCardDataUrl)
    //   .map((response: Response) => <UserProfileCard>response.json())
    //   .catch(this._errorHandler);

      // return this.http.get(this.profileCardDataUrl)
      //   .map((response: Response) => (<UserProfileCard[]>response.json())
      //     .filter((x) => x.Conference.toLowerCase() === conference.toLowerCase()
      //       && x.Division.toLowerCase() === division.toLowerCase()))
      //   .toPromise();

      return this.http.get(this.profileCardDataUrl)
        .map((response: Response) => (<UserProfileCard>response.json()))
        .toPromise();
  }

  _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }
}
