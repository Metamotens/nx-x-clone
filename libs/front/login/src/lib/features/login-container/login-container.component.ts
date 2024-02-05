import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthFormComponent } from '../../ui/login-form/auth-form.component';

@Component({
  selector: 'x-clone-login-container',
  standalone: true,
  imports: [CommonModule, AuthFormComponent],
  templateUrl: './login-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginContainerComponent {

  formGroup: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  handleSubmit(): void {
    const { username, password } = this.formGroup.getRawValue();
    console.log(username, password);
  }
}
