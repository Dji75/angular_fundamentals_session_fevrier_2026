import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../shared/validators/custom.validators';

@Component({
  selector: 'ngs-login',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  readonly #router = inject(Router);
  readonly #fb = inject(FormBuilder);

  protected readonly loginForm = this.#fb.group({
    email: this.#fb.control(''),
    password: this.#fb.control(''),
  }, { validators: [CustomValidators.notPasswordSameAsLogin()] });

  protected login() {
    console.log('login: ', this.loginForm.value.email, this.loginForm.value.password);
    this.#router.navigate(['/']);
  }
}
