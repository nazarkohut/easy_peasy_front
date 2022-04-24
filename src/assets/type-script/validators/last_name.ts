import {Validators} from "@angular/forms";

export function getLastNameValidators(){
  return [Validators.required, Validators.maxLength(64)];
}
