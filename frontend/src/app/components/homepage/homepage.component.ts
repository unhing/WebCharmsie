import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private router: Router) { }

  navigateToWorkshop() {
    this.router.navigate(['/workshop']);
  }

  navigateToAboutUs() {
    this.router.navigate(['/about']);
  }

  navigateToProducts() {
    this.router.navigate(['/product']);
  }

  navigateToBlogs() {
    this.router.navigate(['/blog']);
  }
}
