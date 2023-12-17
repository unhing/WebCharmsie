import { Component } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {

  isClickedOption1 = false;
  isClickedOption2 = false;

  toggleSubmenuOption1() {
    this.isClickedOption1 = !this.isClickedOption1;
  }

  toggleSubmenuOption2() {
    this.isClickedOption2 = !this.isClickedOption2;
  }

}
