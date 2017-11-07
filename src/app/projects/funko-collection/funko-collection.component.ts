import { Component, OnInit } from '@angular/core';

import { IFunkoCollection, IFunkoDetail } from './funko.mockData';
import { FunkoCollectionService } from './funko-collection.services';

@Component({
  selector: 'app-projects-funko-collection',
  templateUrl: './funko-collection.component.html',
  styleUrls: ['./funko-collection.component.css'],
  providers: [FunkoCollectionService]
})
export class ProjectsFunkoCollectionComponent implements OnInit {

  results: IFunkoDetail[];
  categoryCollection: string[];
  categoryQuery: string;
  titleQuery: string;
  onlyShowExclusives: boolean;

  constructor(
    private funkoCollectionService: FunkoCollectionService) { }

  ngOnInit(): void {
      this.funkoCollectionService.getCompleteCollection().then(x => this.results =
        x.Funkos.sort(function(a, b) {
          if (a.Number < b.Number) {
              return -1;
          }
          if (a.Number > b.Number) {
              return 1;
          }

          return 0;
      }));
      this.funkoCollectionService.getCollectionCategories().then(x => this.categoryCollection =
        x.sort(function(a, b) {
          if (a < b) {
              return -1;
          }
          if (a > b) {
              return 1;
          }

          return 0;
      }));

      this.onlyShowExclusives = false;
  }

}
