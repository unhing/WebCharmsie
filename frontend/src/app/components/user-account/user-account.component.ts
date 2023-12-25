import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { slideInOutAnimation } from 'src/app/models/slide-in-out.animation';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css'],
  animations: [slideInOutAnimation]
})
export class UserAccountComponent {
  isEditMode = false;
  user: any = {};
  editedUser: any = {};

  errMessage: string = '';

  constructor(private customerService: CustomerService, private matSnackBar: MatSnackBar, private router: Router) {}

  ngOnInit() {
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    if (token) {
      // Fetch customer details based on the token
      this.customerService.getCustomerDetail(token).subscribe(
        (data) => {
          this.user = data;
          this.editedUser = { ...data };  // Create a copy for editing
        },
        (error) => {
          console.error('Error fetching customer details:', error);
        }
      );
    } else {
      console.error('Token not found in local storage');
    }
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;

    if (this.isEditMode) {
      // If entering edit mode, create a new object to store edited information for each field
      this.editedUser = { ...this.user };
    }
  }

  saveChanges() {
    const token = localStorage.getItem('token');

    if (token) {
      this.customerService.patchCustomer(this.editedUser, token).subscribe({
        next:(data)=>{this.matSnackBar.open('Update profile success!', 'Ok', { duration: 5000 }); window.location.reload()},
        error:(err)=>{this.errMessage=err}
      })
    }
  }
}