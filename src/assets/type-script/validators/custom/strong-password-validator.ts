import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {getASCII, isLowerCase, isNumeric, isUpperCase} from "./is-alpha-numeric";

export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let value = control.value;
    let s = new Set();
    for (let i = 0; i < value.length; i++) {
      s.add(value[i])
    }

    let containsSpecialChar = 0;
    let containsLowerCaseChar = 0;
    let containsUpperCaseChar = 0;
    let containsNumber = 0;

    s.forEach(v => {
      let char: string = String(v);
      let ascii = getASCII(char);
      containsSpecialChar += Number(isSpecialChar(ascii));
      containsLowerCaseChar += Number(isLowerCase(ascii));
      containsUpperCaseChar += Number(isUpperCase(ascii));
      containsNumber += Number(isNumeric(ascii));
    })
    console.log(containsSpecialChar)
    return getStrongPasswordError(containsSpecialChar, containsLowerCaseChar, containsUpperCaseChar, containsNumber);
  }
}


function isSpecialChar(asciiOfChar: number): boolean {
  let isSpecialCharOfFirstType = (getASCII('!') <= asciiOfChar && asciiOfChar <= getASCII('/'));
  let isSpecialCharOfSecondType = (getASCII(':') <= asciiOfChar && asciiOfChar <= getASCII('@'));
  let isSpecialCharOfThirdType = (getASCII('[') <= asciiOfChar && asciiOfChar <= getASCII('^'));
  let isSpecialCharOfFourthType = (getASCII('{') <= asciiOfChar && asciiOfChar <= getASCII('~'));
  return isSpecialCharOfFirstType || isSpecialCharOfSecondType || isSpecialCharOfThirdType || isSpecialCharOfFourthType;
}

function getStrongPasswordError(containsSpecialChar: number, containsLowerCaseChar: number, containsUpperCaseChar: number, containsNumber: number): object | null {
  if (containsLowerCaseChar == 0) {
    return {strongPassword: {containsLowerCaseChar: true}};
  } else if (containsUpperCaseChar == 0) {
    return {
      strongPassword: {containsUpperCaseChar: true}
    }
  } else if (containsNumber == 0) {
    return {strongPassword: {containsNumber: true}};
  } else if (containsSpecialChar == 0) {
    return {strongPassword: {containsSpecialChar: true}};
  }
  return null;
} // maybe it is better to replace weak password with strongPassword
