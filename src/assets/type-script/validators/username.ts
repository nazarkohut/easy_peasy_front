import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

export function getUsernameValidators(){
  return [Validators.required, Validators.maxLength(128), alphaNumericValidator()];
}

function alphaNumericValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const isValueValid = isAlphaNumeric(value);
    return !isValueValid ? {alphaNumeric: {containsAlphaNumeric: true}} : null;
  }
}

// custom validator
function isAlphaNumeric(s: string) {
  let code, i, len;

  for (i = 0, len = s.length; i < len; i++) {
    code = s.charCodeAt(i);
    if (!((isNumeric(code)) || isAlpha(code))) {
      return false;
    }
  }
  return true;
}

function isNumeric(code: number) {
  return (code >= getASCII('0') && code <= getASCII('9'));
}

function isAlpha(code: number) {
  return (code >= getASCII('A') && code <= getASCII('Z')) ||
    (code >= getASCII('a') && code <= getASCII('z'));
}

function getASCII(ch: string): number {
  return ch.charCodeAt(0);
}
