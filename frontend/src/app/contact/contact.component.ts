import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ContactForm } from '../models/contact-form.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = new ContactForm;
  errMessage:string='';

  constructor(private contactService: ContactService) {} 

  public setContactForm(form: ContactForm) {
    this.contactForm=form;
  }

  onSubmit() {
    this.contactService.postContactForm(this.contactForm).subscribe({
      next:(data)=>{this.contactForm=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
