// scale-in-out.animation.ts

import { trigger, transition, style, animate } from '@angular/animations';

export const scaleInOutAnimation = trigger('scaleInOut', [
  transition(':enter', [
    style({ transform: 'scale(0.5)', opacity: 0 }),
    animate('0.5s ease-in-out', style({ transform: 'scale(1)', opacity: 1 })),
  ]),
  transition(':leave', [
    animate('0.5s ease-in-out', style({ transform: 'scale(0.5)', opacity: 0 })),
  ]),
]);
