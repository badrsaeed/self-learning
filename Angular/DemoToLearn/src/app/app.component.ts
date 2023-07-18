import { Component } from '@angular/core';
import localAr from '@angular/common/locales/ar-EG';
import { formatDate, registerLocaleData } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
registerLocaleData(localAr);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // public userImage!: string;
  // placeHolder!: string;
  // title = 'DemoToLearn';
  // public myPromise!: string;
  // myPromiseAsync!: Promise<string>;
  // data: any[];
  // formReg: FormGroup;
  constructor() {
    // this.formReg = new FormGroup({
    //   firstName: new FormControl(),
    // });
    // this.data = [
    //   { age: 20, speed: 15 },
    //   { age: 22, speed: 15 },
    //   { age: 25, speed: 12 },
    // ];
    // setTimeout(() => {
    //   this.userImage =
    //     'https://dummyimage.com/120x120/ffedff/0011ff&text=userImage';
    // }, 3000);
    // this.placeHolder =
    //   'https://dummyimage.com/180x180/ffedff/0011ff&text=userImage';
    // this.getMyPromise().then((msg: string) => (this.myPromise = msg));
    // this.myPromiseAsync = this.getMyPromise();
  }

  // getMyPromise() {
  //   return new Promise<string>((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('promise complete');
  //     }, 3000);
  //   });
  // }
  // onSubmit() {
  //   console.log(this.formReg.value);
  // }
}
