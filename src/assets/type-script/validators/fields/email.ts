import {Validators} from "@angular/forms";

export function getEmailValidators(){
  return [Validators.required, Validators.email, Validators.maxLength(254)];
}
