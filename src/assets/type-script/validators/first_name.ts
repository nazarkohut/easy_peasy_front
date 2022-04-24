import {Validators} from "@angular/forms";

export function getFirstNameValidators(){
  return [Validators.required, Validators.maxLength(64)];
}

