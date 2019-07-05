import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static match(passwordGroup: AbstractControl) {
    const password = passwordGroup.get('password').value;
    const confirmPassword = passwordGroup.get('confirmPassword').value;
    return password === confirmPassword ? null : { match: { password, confirmPassword } };
  }
}
