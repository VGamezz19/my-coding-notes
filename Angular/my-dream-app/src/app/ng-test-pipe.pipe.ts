import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngTestPipe'
})
export class NgTestPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
