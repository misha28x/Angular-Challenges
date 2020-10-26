import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const TabAnimations: {
  readonly translateTab: AnimationTriggerMetadata;
} = {
  translateTab: trigger('translateTab', [
    state('center, void, left-origin-center, right-origin-center', style({ transform: 'none' })),
    state('left', style({ transform: 'translate3d(-100%, 0, 0)', minHeight: '1px' })),
    state('right', style({ transform: 'translate3d(100%, 0, 0)', minHeight: '1px' })),

    transition(
      '* => left, * => right, left => center, right => center',
      animate('{{animationDuration}} cubic-bezier(0.645, 0.045, 0.355, 1)')
    ),

    transition('void => left-origin-center', [
      style({ transform: 'translate3d(-100%, 0, 0)' }),
      animate('{{animationDuration}} cubic-bezier(0.645, 0.045, 0.355, 1)'),
    ]),
    transition('void => right-origin-center', [
      style({ transform: 'translate3d(100%, 0, 0)' }),
      animate('{{animationDuration}} cubic-bezier(0.645, 0.045, 0.355, 1)'),
    ]),
  ]),
};
