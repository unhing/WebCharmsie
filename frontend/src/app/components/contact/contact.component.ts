import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ContactForm } from '../../models/contact-form.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = new ContactForm;
  errMessage:string='';

  constructor(private contactService: ContactService, private snackBar: MatSnackBar) {} 

  public setContactForm(form: ContactForm) {
    this.contactForm=form;
  }

  onSubmit() {
    this.contactService.postContactForm(this.contactForm).subscribe({
      next:(data)=>{this.contactForm = new ContactForm(), this.snackBar.open('Form sent', 'Ok', { duration: 3000 });},
      error:(err)=>{this.errMessage=err}
    })
  }
}
