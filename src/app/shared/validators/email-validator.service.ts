import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import {  delay, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {
  constructor() { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>((sub) => {
      console.log({email})

      if( email === 'octavio@gmail.com'){
        sub.next({emailTaken: true})
        sub.complete();
        return;
      }

      sub.next(null)
      sub.complete();
    }).pipe(
      delay(3000)
    )

    return httpCallObservable
  }




  // validate(control: AbstractControl): Observable<ValidationErrors | null> {

  //   const email = control.value;
  //   console.log({email})

  //   return of({
  //     emailTaken: true
  //   })

  // }

}
