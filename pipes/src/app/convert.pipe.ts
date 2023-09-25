import { Pipe, PipeTransform, numberAttribute } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
  tempValue!: number;
  transform(value: any, targetUnits: string): any {
    if(!value) {
      return '';
    }
    console.log(targetUnits);
    
    switch (targetUnits) {
      case value:
        case 'km':
          return value * 1.60934;
        break;

        case 'm':
          return value * 1.60934 * 1000;
        break;

        case 'cm':
          return value * 1.60934 * 1000 * 1000;
        break;

      default:
        value;
    }
  }

}
