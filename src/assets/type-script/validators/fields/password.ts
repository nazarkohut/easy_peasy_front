import {Validators} from "@angular/forms";

export function getPasswordValidators (minLength=6, maxLength=64){
  return [Validators.required, Validators.minLength(minLength), Validators.maxLength(maxLength)]
}
