import {Validators} from "@angular/forms";
import {confirmPasswordValidator} from "../custom/confirm-password-same-as-password";

export function getConfirmPasswordValidators(){
  return [Validators.required, confirmPasswordValidator()];
}
