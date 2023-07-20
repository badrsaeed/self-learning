import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImage implements PipeTransform {
  transform(userImage: string, placeHolder: string): string | undefined {
    return userImage ? userImage : placeHolder;
  }
}
