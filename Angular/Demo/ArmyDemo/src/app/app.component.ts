import {
  Component,
  ElementRef,
  EnvironmentInjector,
  ViewChild,
} from '@angular/core';
import {ajax} from 'rxjs/ajax';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-EG';
import { Observable, Subscription, from } from 'rxjs';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { validatePasssword } from './Componenets/validations/valid-password.validators';
import { asyncValidatePassword } from './Componenets/validations/async.validators';
registerLocaleData(localeAr, 'ar');

interface IStudent {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent  {


  // myForm!:FormGroup;
  // firstName!:FormControl
  // lastName!:FormControl
  // password!:FormControl
  // confirmPassword!:FormControl
  // lazyUserName!:FormControl
//Constructor
  constructor(private fb:FormBuilder) {
    // this.initiateFormControles();
    // this.createForm();
  }

  // initiateFormControles(){
  //   this.firstName = new FormControl('',[Validators.required, this.customControl],[asyncValidatePassword()]);
  //   this.lastName = new FormControl('');
  //   this.password = new FormControl('');
  //   this.confirmPassword = new FormControl('');
  //   //this using to send the value to the server after the user blure from input
  //   this.lazyUserName = new FormControl('', {
  //     validators: Validators.required,
  //     asyncValidators: asyncValidatePassword(),
  //     updateOn: 'blur'
  //   });
  // }

  // createForm(){
  //   this.myForm = new FormGroup({
  //     firstName: this.firstName,
  //     lastName: this.lastName,
  //     password:this.password,
  //     confirmPassword:this.confirmPassword,
  //     lazyUserName:this.lazyUserName
  //   });
  //   this.myForm.setValidators(validatePasssword('password', 'confirmPassword'));
  // }

  // customControl(input:AbstractControl):ValidationErrors | null{
  //   // console.log(input);
  //   // console.log("hi");
  //   if(input.value.match(/[0-9]/g)){
  //     // console.log("invalidName");
  //     let validationOb:ValidationErrors = {'invalidName':true}
  //     return validationOb;
  //   }
  //   return null;
  // }

  // validatePasssword(formGroup:FormGroup): ValidationErrors|null{
  //   console.log(formGroup);


  //   return null;
  // }
}
