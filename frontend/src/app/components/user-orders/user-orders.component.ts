import { Component } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/models/fade-in-out.animation';
import { slideInOutAnimation } from 'src/app/models/slide-in-out.animation';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css'],
  animations: [fadeInOutAnimation]
})
export class UserOrdersComponent {

}
