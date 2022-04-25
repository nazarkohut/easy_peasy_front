import {Validators} from "@angular/forms";

export function getPasswordValidators (){
  return [Validators.required, Validators.minLength(6), Validators.maxLength(64)]
}
