import { Component } from '@angular/core';
import { slideInOutAnimation } from '../services/slide-in-out.animation';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  animations: [slideInOutAnimation],
})
export class OrderComponent {
  
}
