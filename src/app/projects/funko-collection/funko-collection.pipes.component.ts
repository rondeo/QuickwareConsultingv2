import { Pipe, PipeTransform } from '@angular/core';

import { IFunkoCollection, IFunkoDetail } from './funko.mockData';

@Pipe({
  name: 'funkoCollectionFilter'
})
export class ProjectsFunkoCollectionPipe implements PipeTransform {
  transform(items: any[], ...args: any[]): any {

    enum FilterOrder {
        Category,
        Title,
        IsExclusive
    }

    if (!args && !items) {
        return items;
    } else if (items) {

        return items.filter(item => {

            let categoryMatches;
            let titleMatches;
            let isExclusiveExists;

            isExclusiveExists = (typeof item['IsExclusive'] === 'boolean' || item['IsExclusive'] instanceof Boolean)
                    && (item['IsExclusive'] === args[FilterOrder.IsExclusive]) || !args[FilterOrder.IsExclusive];

            if (typeof args[FilterOrder.Category] === 'undefined' || args[FilterOrder.Category] === '') {
                categoryMatches = true;
            } else {
                categoryMatches = (typeof item['Category'] === 'string' || item['Category'] instanceof String)
                    && (item['Category'].toLowerCase().indexOf(args[FilterOrder.Category].toLowerCase()) !== -1);
            }

            if (typeof args[FilterOrder.Title] === 'undefined' || args[FilterOrder.Title] === '') {
                titleMatches = true;
            } else {
                titleMatches = (typeof item['Title'] === 'string' || item['Title'] instanceof String)
                    && (item['Title'].toLowerCase().indexOf(args[FilterOrder.Title].toLowerCase()) !== -1);
            }

            if (categoryMatches && titleMatches && isExclusiveExists) {
                return true;
            }
        });
    }
  }
}
