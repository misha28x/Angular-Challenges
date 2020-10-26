import { animate, state, style, transition, trigger } from '@angular/animations';

export type FadeOutState = 'in' | 'out';

export const fadeOut = trigger('fadeOut', [
  state(
    'out',
    style({
      opacity: 0,
      height: 0,
    })
  ),
  state(
    'in',
    style({
      opacity: 1,
      height: '*',
    })
  ),

  transition('* <=> *', animate('0.3s 0s ease-in-out')),
]);
