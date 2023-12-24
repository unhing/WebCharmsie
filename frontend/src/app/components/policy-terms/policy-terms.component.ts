import { Component } from '@angular/core';

@Component({
  selector: 'app-policy-terms',
  templateUrl: './policy-terms.component.html',
  styleUrls: ['./policy-terms.component.css']
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
