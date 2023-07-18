import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(image:string, placeholder:string) {
    return image?image:placeholder;
  }

}
