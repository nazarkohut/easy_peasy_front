import {Validators} from "@angular/forms";
import {alphaNumericValidator} from "../custom/is-alpha-numeric";

export function getFirstNameValidators(){
  return [Validators.required, Validators.maxLength(64), alphaNumericValidator()];
}

