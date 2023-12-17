import { Component } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent {
  isClickedOption1 = false;
  isClickedOption2 = false;

  toggleSubmenuOption1() {
    this.isClickedOption1 = !this.isClickedOption1;
  }

  toggleSubmenuOption2() {
    this.isClickedOption2 = !this.isClickedOption2;
  }
}
