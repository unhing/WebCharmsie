import { Component } from '@angular/core';

@Component({
  selector: 'app-categorynew',
  templateUrl: './categorynew.component.html',
  styleUrls: ['./categorynew.component.css']
})
export class CategorynewComponent {
  isClickedOption1 = false;
  isClickedOption2 = false;

  toggleSubmenuOption1() {
    this.isClickedOption1 = !this.isClickedOption1;
  }

  toggleSubmenuOption2() {
    this.isClickedOption2 = !this.isClickedOption2;
  }
}
