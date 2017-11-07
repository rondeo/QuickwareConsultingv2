import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { Team, TEAMS } from './nfl-standings.mock-data';

@Injectable()
export class TeamService {

	private dataUrl = '/assets/data/nfl-standings.json';

	constructor(private http: Http) {}

	getTeams(): Promise<Team[]> {
		return Promise.resolve(TEAMS);
	}

	fetchTeams() {
		return this.http.get(this.dataUrl)
			.map((response: Response) => <Team[]>response.json())
			.catch(this._errorHandler);
	}

	fetchTeamsByConferenceAndDivision(conference: string, division: string) : Observable<Array<Team>> {
		return this.http.get(this.dataUrl)
			.map((response: Response) => (<Team[]>response.json())
				.filter((x) => x.Conference.toLowerCase() === conference.toLowerCase()
					&& x.Division.toLowerCase() === division.toLowerCase()))
			.catch(this._errorHandler);
	}

	_errorHandler(error: Response) {
		console.error(error)
		return Observable.throw(error || "Server Error");
	}

	getTeamsByConference(conference: string): Promise<Team[]> {
		return Promise.resolve(TEAMS.filter(x => x.Conference.toLowerCase() === conference.toLowerCase()));
	}

	getTeamsByConferenceAndDivision(conference: string, division: string): Promise<Team[]> {

		return this.http.get(this.dataUrl)
			.map((response: Response) => (<Team[]>response.json())
				.filter((x) => x.Conference.toLowerCase() === conference.toLowerCase()
					&& x.Division.toLowerCase() === division.toLowerCase()))
			.toPromise();

		// let promise = new Promise((resolve, reject) => {
		// 	resolve(TEAMS.filter(x => x.Conference.toLowerCase() === conference.toLowerCase()
		// 		&& x.Division.toLowerCase() === division.toLowerCase()));
		// });

		// return promise;

		// return Promise.resolve(TEAMS.filter(x => x.Conference.toLowerCase() === conference.toLowerCase()
		// && x.Division.toLowerCase() === division.toLowerCase()));
	}
}
