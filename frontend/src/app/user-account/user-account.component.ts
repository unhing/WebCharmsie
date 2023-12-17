import { Component } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {
  isEditMode = false;
  user: any = {
    name: 'Ngan Ha',
    dob: '2003-05-20',
    email: 'ngan.ha@example.com',
    address: '123 District 3, Ho Chi Minh City',
    occupation: 'Student',
    phone: '555-1234'
  };

  // Create separate objects to store edited information for each field
  editedUser: any = {
    name: '',
    dob: '',
    email: '',
    address: '',
    occupation: '',
    phone: ''
  };

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  
    if (this.isEditMode) {
      // If entering edit mode, create a new object to store edited information for each field
      this.editedUser = {
        name: this.user.name,
        dob: this.user.dob,
        email: this.user.email,
        address: this.user.address,
        occupation: this.user.occupation,
        phone: this.user.phone,
      };
    }
  }

  saveChanges() {
    // Implement your save changes logic here
    // For now, we'll just log the changes
    console.log('Old User:', this.user);
    console.log('Edited User:', this.editedUser);
  }
}