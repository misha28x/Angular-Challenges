import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, max: number = 100): string {
    if (value.length < 100) {
      return value;
    }

    return `${value.substr(0, 100)}...`;
  }
}
