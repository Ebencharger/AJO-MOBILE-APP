import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signup'
})
export class SignupPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
