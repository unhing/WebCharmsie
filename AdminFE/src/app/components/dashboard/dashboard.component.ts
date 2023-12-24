import { Component } from '@angular/core';
import { slideInOutAnimation } from '../../services/slide-in-out.animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [slideInOutAnimation],
})
export class DashboardComponent {
  isClickedOption1 = false;
  isClickedOption2 = false;

  toggleSubmenuOption1() {
    this.isClickedOption1 = !this.isClickedOption1;
  }

  toggleSubmenuOption2() {
    this.isClickedOption2 = !this.isClickedOption2;
  }
  

}
