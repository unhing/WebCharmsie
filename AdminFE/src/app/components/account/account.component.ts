import { Component } from '@angular/core';
import { slideInOutAnimation } from '../../services/slide-in-out.animation';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  animations: [slideInOutAnimation],
})
export class AccountComponent {
}
