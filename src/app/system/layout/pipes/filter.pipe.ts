import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appFilter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any, value: string, fielt: string): any {
    if (items.length === 0 || !value) {
      return items;
    }
    return items.filter( (i) => {
      const t = Object.assign({}, i)
      if (!isNaN(t[fielt])) {
        t[fielt] += '';
      }
      if (fielt === 'type') {
        t[fielt] = t[fielt] === 'income' ? 'Profit' : 'Cost'
      }

      if (fielt === 'category') {
        t[fielt] = t['catName'];
      }
      return t[fielt].toLowerCase().indexOf(value.toLowerCase()) !== -1;
    })
  }
}

