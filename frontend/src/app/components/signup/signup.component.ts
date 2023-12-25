import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { slideInOutAnimation } from 'src/app/models/slide-in-out.animation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [slideInOutAnimation]
})
export class SignupComponent {
  signupForm: FormGroup;
  errMessage: string = '';

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private matSnackBar: MatSnackBar) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const dateOfBirthValue = this.signupForm.value.dateOfBirth;

      // Check if dateOfBirthValue is a Date object
      const formattedDateOfBirth = dateOfBirthValue instanceof Date
        ? dateOfBirthValue.toLocaleDateString()
        : dateOfBirthValue;

      // Create a new object with the formatted dateOfBirth
      const signupData = { ...this.signupForm.value, dateOfBirth: formattedDateOfBirth };

      this.authService.signup(signupData).subscribe({
        next:(data)=>{this.matSnackBar.open('Register successful', 'Ok', { duration: 3000 }), this.router.navigate(['/login'])},
        error:(err)=>{this.errMessage=err}
      })
    }
  }
}
