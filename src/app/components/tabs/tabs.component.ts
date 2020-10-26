import {
  ChangeDetectionStrategy,
  ContentChildren,
  EventEmitter,
  Component,
  Input,
  Output,
  QueryList,
  AfterContentChecked,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterContentChecked {
  @ContentChildren(TabComponent, { descendants: true }) tabs: QueryList<TabComponent>;
  @ViewChild('wrapper') tabWrapper: ElementRef;

  @Input()
  get selectedIndex(): number {
    return this._selectedIndex;
  }
  set selectedIndex(selectedIndex: number) {
    this._selectedIndex = selectedIndex;
  }
  private _selectedIndex: number;

  @Output() indexChange = new EventEmitter();

  ngAfterContentChecked(): void {
    const indexToSelect = (this.selectedIndex = this.clampTabIndex(this.selectedIndex));

    this.tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect;

      if (this._selectedIndex !== null && tab.position === 0 && !tab.origin) {
        tab.origin = indexToSelect - this._selectedIndex;
      }
    });
  }

  handleClick(index: number): void {
    this._selectedIndex = index;
  }

  onCenteringStarted(wrapperHeight: number): void {
    const wrapper: HTMLElement = this.tabWrapper.nativeElement;

    wrapper.style.height = `${wrapperHeight}px`;

    if (wrapper.offsetHeight) {
      wrapper.style.height = `${wrapperHeight}px`;
    }
  }

  onCenteringDone(): void {
    const wrapper: HTMLElement = this.tabWrapper.nativeElement;

    wrapper.style.height = '';
  }

  private clampTabIndex(index: number): number {
    return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
  }
}
