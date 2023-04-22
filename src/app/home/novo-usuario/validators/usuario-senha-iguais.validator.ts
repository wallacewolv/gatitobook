import { FormGroup } from "@angular/forms";

export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  const userName: string = formGroup.get('userName')?.value ?? '';
  const password: string = formGroup.get('password')?.value ?? '';

  if (userName.trim() + password.trim()) {
    return userName !== password ? null : { senhaIgualUsuario: true };
  } else {
    return null;
  }
}
