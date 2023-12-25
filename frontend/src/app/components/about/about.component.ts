import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { slideInOutAnimation } from 'src/app/models/slide-in-out.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [slideInOutAnimation]
})
export class AboutComponent {
  constructor(private router: Router) {}

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = element.offsetTop - 150;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }
}
