import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switchesPage.component.html',
})
export class SwitchesPageComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  public myForm: FormGroup = this.fb.group({
    gender: ['M', [Validators.required]],
    wantNotifications: [false, [Validators.required]],
    termsAndConditions: [false, [Validators.requiredTrue]],
  })


  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched
    );
  }

  getFieldError( field: string ): string | null{

    if(!this.myForm.controls[field]) return null

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch(key){
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracters`
      }
    }

    return null;
  }

  public person = {
    gender: "F",
    wantNotifications: false,
  }

  onSave() {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    const {termsAndConditions, ...newPerson} = this.myForm.value;

    this.person = newPerson;
    console.log(this.myForm.value);


    console.log(this.person);

    this.myForm.reset();

  }

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }


}
