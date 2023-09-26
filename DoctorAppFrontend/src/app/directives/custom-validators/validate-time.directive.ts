import { Directive } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector:'[validateTime]',
  providers: [
    {
      provide: NG_VALIDATORS, useExisting: ValidateTimeDirective, multi: true
    }
  ]
})
export class ValidateTimeDirective implements Validators {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
 
    const stime = control.get("stime")?.value;
    const etime = control.get("etime")?.value;
 
    if(!stime && !etime )
      return { 'invalidTime': false }
    if (stime >= etime )
      return { 'invalidTime': true } 
    else
       return { 'invalidTime': false }
 
  }

}
