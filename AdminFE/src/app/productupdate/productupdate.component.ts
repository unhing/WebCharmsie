import { Component } from '@angular/core';

@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css']
})
export class ProductupdateComponent {
  isClickedOption1 = false;
  isClickedOption2 = false;

  toggleSubmenuOption1() {
    this.isClickedOption1 = !this.isClickedOption1;
  }

  toggleSubmenuOption2() {
    this.isClickedOption2 = !this.isClickedOption2;
  }
}
