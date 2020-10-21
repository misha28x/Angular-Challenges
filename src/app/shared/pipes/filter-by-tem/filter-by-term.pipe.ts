import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTerm',
})
export class FilterByTermPipe implements PipeTransform {
  transform(values: string[] = [], term: string): string[] {
    return values.filter((value) =>
      value.toLowerCase().includes(term.toLowerCase())
    );
  }
}
