import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showSignup = false;
  loginEmail = '';
  loginPassword = '';
  signupEmail = '';
  signupPassword = '';
  confirmPassword = '';

  toggleSignup() {
    this.showSignup = !this.showSignup;
  }

  togglePasswordVisibility(passwordField: HTMLInputElement, eyeIcon: HTMLElement) {
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      eyeIcon.classList.replace('bx-hide', 'bx-show');
    } else {
      passwordField.type = 'password';
      eyeIcon.classList.replace('bx-show', 'bx-hide');
    }
  }

  onSubmitLogin() {
    if (this.loginEmail && this.loginPassword) {
      console.log('Login Form Submitted');
      console.log('Email:', this.loginEmail);
      console.log('Password:', this.loginPassword);
      // Implement your login logic here
    } else {
      alert('Please fill in all fields');
    }
  }

  onSubmitSignup() {
    if (this.signupEmail && this.signupPassword && this.confirmPassword) {
      if (this.signupPassword === this.confirmPassword) {
        console.log('Signup Form Submitted');
        console.log('Email:', this.signupEmail);
        console.log('Password:', this.signupPassword);
        // Implement your signup logic here
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('Please fill in all fields');
    }
  }
}
