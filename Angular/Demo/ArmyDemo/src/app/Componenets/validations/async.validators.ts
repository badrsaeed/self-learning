import { AsyncValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, map, delay } from "rxjs";
import { ajax } from "rxjs/ajax";

export function asyncValidatePassword():AsyncValidatorFn{

  return (control:AbstractControl):Observable<ValidationErrors|null> =>{
    return getUser().pipe(
      map(res => {
        console.log(res);
        return res.username === control.value ? {'existEmail':true} : null;
      })
    );
  }
//this function act as server
  function getUser() : Observable<any>{
    return ajax.getJSON('https://jsonplaceholder.typicode.com/users/1')
    .pipe(delay(2000))
  }
}
