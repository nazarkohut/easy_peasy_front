import {FormGroup} from "@angular/forms";

export function checkCompareValuesOnChange(form: FormGroup, field: string = 'password', confirmField: string = 'confirm_password') {
  form.controls[field].valueChanges.subscribe(() => {
    setTimeout(() => {
      form.controls[confirmField].updateValueAndValidity();
    })
  });
}
