import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

import { openCloseAnimation } from './panel-colapse.animation';

@Component({
  selector: 'app-accordion-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [openCloseAnimation],
})
export class PanelComponent {
  @HostBinding('class.open') get isOpened(): boolean {
    return this.opened;
  }

  @Input() title: string;

  get animationState(): string {
    return this.opened ? 'open' : 'closed';
  }

  private opened = false;

  @HostListener('click')
  onClick(): void {
    this.opened = !this.opened;
  }
}
