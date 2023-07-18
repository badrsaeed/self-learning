import { ajax } from 'rxjs/ajax';
import { AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, delay, map } from 'rxjs';

export function validatePasssword(control1:string, control2:string): ValidatorFn {
  return (formGroub: AbstractControl): ValidationErrors | null => {
    const formGroup = formGroub as FormGroup;
    let password = formGroup.controls[control1];
    let confirmPassword = formGroup.controls[control2];

    if(password && confirmPassword && password.dirty && confirmPassword.dirty && (password.value !== confirmPassword.value)){
      formGroup.get('confirmPassword')?.setErrors({'wrongMatch':true})
      return {'wrongMatch':true};
    }
    return null;
  };
}


