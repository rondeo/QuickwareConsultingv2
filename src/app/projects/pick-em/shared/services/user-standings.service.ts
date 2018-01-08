import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { UserStandings } from '../data/user-standings.mock-data';

@Injectable()
export class UserStandingsService {

  private dataUrl = '/assets/data/user-standings.json';

  constructor(private http: Http) {}

  fetchStandings() {
    return this.http.get(this.dataUrl)
      .map((response: Response) => <UserStandings[]>response.json())
      .catch(this._errorHandler);
  }

  _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }
}
