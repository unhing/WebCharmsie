import { Component } from '@angular/core';
import { slideInOutAnimation } from '../services/slide-in-out.animation';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [slideInOutAnimation],
})
export class AdminComponent {

}
