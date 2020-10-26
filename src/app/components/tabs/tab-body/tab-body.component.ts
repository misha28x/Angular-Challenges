import {
  Component,
  HostBinding,
  HostListener,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

import { TabAnimations } from '../animations/tab.animations';

export type TabAnimationState =
  | 'center'
  | 'left'
  | 'right'
  | 'left-origin-center'
  | 'right-origin-center';

export type TabOriginState = 'left' | 'right';

@Component({
  selector: 'app-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.scss'],
  animations: [TabAnimations.translateTab],
})
export class TabBodyComponent {
  @HostBinding('class.tab-body') true;
  @HostBinding('@translateTab') get animation(): any {
    return {
      value: this._position,
      params: { animationDuration: this.animationDuration },
    };
  }

  _position: TabAnimationState;
  private positionIndex: number;

  @Input() origin: TabOriginState;
  @Input() animationDuration = '500ms';
  @Input() content: TemplatePortal<any>;

  @Input()
  set position(position: number) {
    this.positionIndex = position;
    this.calculatePosition();
  }

  @Output() readonly centeringStarted = new EventEmitter<number>();
  @Output() readonly centeringDone = new EventEmitter<void>();

  get elementHeight(): number {
    return this.elRef.nativeElement.clientHeight;
  }

  constructor(private elRef: ElementRef) {}

  @HostListener('@translateTab.start')
  onCenteringStarted(): void {
    this.centeringStarted.emit(this.elementHeight);
  }

  @HostListener('@translateTab.done')
  onCenteringDone(): void {
    this.centeringDone.emit();
  }

  private calculatePosition(): void {
    if (this.positionIndex < 0) {
      this._position = 'left';
    } else if (this.positionIndex > 0) {
      this._position = 'right';
    } else {
      this._position = 'center';
    }
  }
}
