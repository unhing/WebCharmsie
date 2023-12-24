import { Component } from '@angular/core';
import { slideInOutAnimation } from '../../services/slide-in-out.animation';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],
  animations: [slideInOutAnimation],
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
