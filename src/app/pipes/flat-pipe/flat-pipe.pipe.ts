import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatPipe',
})
export class FlatPipePipe implements PipeTransform {
  transform(value: any[]): any[] {
    if (!Array.isArray(value)) return value;

    return this.flatArr(value);
  }

  private flatArr<T>(val: unknown[]): T[] {
    const result = [];

    val.forEach((el) => {
      if (Array.isArray(el)) {
        result.push(...this.flatArr(el));
      } else {
        result.push(el);
      }
    });

    return result as T[];
  }
}
