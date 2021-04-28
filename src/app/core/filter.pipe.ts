import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], fields: string[], value: any): any[] {
    if (!items) { return []; }
    if (!value || value.length === 0) { return items; }
    if (fields.length === 0) {
      return items.filter(
        item => {
          return (
            ((typeof item === 'string') && (item.toLowerCase().indexOf(value.toLowerCase()) !== -1)) ||
            ((typeof item !== 'string') && (item === value))
          );
        }
      );
    }

    return items.filter(
      item => {
        for (let i = 0; i < fields.length; i++) {
          if (
            ((typeof item[fields[i]] === 'string') && (item[fields[i]].toLowerCase().indexOf(value.toLowerCase()) !== -1)) ||
            ((typeof item[fields[i]] !== 'string') && (item[fields[i]] === value))
          ) {
            return true;
          }
        }
        return false;
      }
    );
  }

}
