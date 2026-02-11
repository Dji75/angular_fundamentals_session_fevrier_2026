import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export abstract class CustomValidators {
  static notPasswordSameAsLogin(): ValidatorFn {
    return (control: AbstractControl) => {
      const form = control as FormGroup;
      if (form.controls['email'].touched && form.controls['password'].touched && form.controls['email']?.value === form.controls['password']?.value) {
        return { notPasswordSameAsLogin: {message: `passord is equal to email ${form.controls['email']?.value}` } };
      }
      return null;
    };
  }
}
