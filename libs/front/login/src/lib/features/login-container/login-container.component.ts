import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthFormComponent } from '../../ui/login-form/auth-form.component';
import { AuthStore } from '@x-clone/shared/front/auth';

@Component({
  selector: 'x-clone-login-container',
  standalone: true,
  imports: [CommonModule, AuthFormComponent],
  templateUrl: './login-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthStore],
})
export class LoginContainerComponent {
  formBuilder = inject(FormBuilder);
  authStore = inject(AuthStore);

  formGroup = this.formBuilder.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  handleSubmit(): void {
    const { email, password } = this.formGroup.getRawValue();
    this.authStore.login({ email, password });
  }
}
