import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suming',
})
export class SumingPipe implements PipeTransform {
  transform(list: any[], column: string) {
    return list.reduce((a, b) => a + b[column], 0);
  }
}
