import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { IFunkoCollection } from './funko.mockData';

import { FUNKO_COLLECTION_CATEGORIES_MOCK_DATA, FUNKO_COLLECTION_MOCK_DATA } from './funko.mockData';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FunkoCollectionService {
    // Resolve HTTP using the constructor
    constructor (private http: Http) {}

    getCompleteCollection(): Promise<IFunkoCollection> {
        return Promise.resolve(FUNKO_COLLECTION_MOCK_DATA);
    }

    getCollectionCategories(): Promise<string[]> {
        return Promise.resolve(FUNKO_COLLECTION_CATEGORIES_MOCK_DATA);
    }
}
