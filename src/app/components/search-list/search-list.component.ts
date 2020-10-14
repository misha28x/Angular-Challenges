import {
  ChangeDetectionStrategy,
  EventEmitter,
  Component,
  Output,
  Input,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchListComponent {
  @Input() items: string[];
  @Output() itemSelected = new EventEmitter();

  searchTerm = '';

  get showDropdown(): boolean {
    return this.searchTerm.length > 0;
  }

  updateSearchTerm(search: string): void {
    this.searchTerm = search;
  }
}
