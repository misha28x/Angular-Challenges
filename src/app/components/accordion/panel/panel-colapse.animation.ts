import {
  animate,
  animation,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

const transAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
  }),
  animate('{{ time }}'),
]);

export const openCloseAnimation = trigger('openClose', [
  state(
    'open',
    style({
      height: '*',
      opacity: 1,
    })
  ),
  state(
    'closed',
    style({
      height: 0,
      opacity: 0.5,
    })
  ),
  transition('open => closed', [animate('0.2s 0s ease-in-out')]),
  transition('closed => open', [animate('0.3s 0s ease-in-out')]),
]);
