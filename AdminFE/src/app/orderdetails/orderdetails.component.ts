import { Component } from '@angular/core';
import { slideInOutAnimation } from '../services/slide-in-out.animation';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css'],
  animations: [slideInOutAnimation],
})
export class OrderdetailsComponent {

}
