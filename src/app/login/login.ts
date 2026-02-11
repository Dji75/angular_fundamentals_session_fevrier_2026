import { Component, inject, OnInit } from '@angular/core';
import { Credentials } from '../shared/models/credentials';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ngs-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  readonly #router = inject(Router);

  protected readonly credentials: Credentials = {
    email: '',
    password: '',
  };

  protected login() {
    console.log('login: ', this.credentials.email, this.credentials.password);
    this.#router.navigate(['/']);
  }
}
