import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { RESUME_MOCK_DATA } from './resume.mockdata';
import { Resume } from './resume';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ResumeService {
    // Resolve HTTP using the constructor
    constructor (private http: Http) {}

    getCompleteResume(): Promise<Resume> {
        return Promise.resolve(RESUME_MOCK_DATA);
    }

    getResumeBySection(section: string): Promise<any> {
        return Promise.resolve(RESUME_MOCK_DATA[section]);
    }
}
