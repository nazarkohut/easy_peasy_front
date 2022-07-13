import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function confirmPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    let areEqual = control.parent?.value.password === value;
    return !areEqual ? {passwordDoesNotMatch: true} : null;
  }
}
