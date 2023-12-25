import { Component } from '@angular/core';
import { slideInOutAnimation } from 'src/app/models/slide-in-out.animation';

@Component({
  selector: 'app-policy-terms',
  templateUrl: './policy-terms.component.html',
  styleUrls: ['./policy-terms.component.css'],
  animations: [slideInOutAnimation]
})
export class PolicyTermsComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = element.offsetTop - 150;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }
}
