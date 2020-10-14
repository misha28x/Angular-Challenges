import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DebounceSearchComponent,
      multi: true,
    },
  ],
})
export class DebounceSearchComponent implements OnInit, OnDestroy {
  searchControl = new FormControl();

  @Input() placeholder = '';
  @Output() searchChange = new EventEmitter();

  private searchSub: Subscription;

  ngOnInit(): void {
    this.listenToSearch();
  }

  ngOnDestroy(): void {
    if (this.searchSub) {
      this.searchSub.unsubscribe();
    }
  }

  private listenToSearch(): void {
    this.searchSub = this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((searchTerm) => this.searchChange.emit(searchTerm));
  }
}
