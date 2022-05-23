import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transforNumber',
})
export class TransforNumberPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .split('')
      .map((leter) =>
        leter
          .replace('a', '4')
          .replace('e', '3')
          .replace('i', '1')
          .replace('o', '0')
          .replace('u', '11')
      )
      .join('');
  }
}
