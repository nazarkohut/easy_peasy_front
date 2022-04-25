import {Validators} from "@angular/forms";
import {alphaNumericValidator} from "../custom/is-alpha-numeric";

export function getUsernameValidators(){
  return [Validators.required, Validators.maxLength(128), alphaNumericValidator()];
}

