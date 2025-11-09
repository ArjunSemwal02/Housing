import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(properties: any[], search: string): any[] {
    if (!search) return properties;
    search = search.toLowerCase();
    return properties.filter((p) => JSON.stringify(p).toLowerCase().includes(search));
  }
}
