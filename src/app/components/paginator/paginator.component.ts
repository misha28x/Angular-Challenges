import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  @Input() total = 0;
  @Input()
  get activePageIndex(): number {
    return this.activePage;
  }
  set activePageIndex(val: number) {
    this.activePage = val;
  }

  @Output() readonly pageChanged = new EventEmitter<number>();

  get pageList(): number[] {
    return this.buildListOfPages(
      this.activePageIndex,
      this.total,
      this.pageSize
    );
  }

  get isNextDisabled(): boolean {
    return this.activePageIndex === this.total - 1;
  }

  get isPrevDisabled(): boolean {
    return this.activePageIndex === 0;
  }

  private pageSize = 5;
  private activePage = 0;

  onPageClick(pageIndex: number): void {
    this.setPage(pageIndex);
  }

  onPrevPage(): void {
    this.setPage(this.activePage - 1);
  }

  onNextPage(): void {
    this.setPage(this.activePage + 1);
  }

  private setPage(index: number): void {
    this.activePage = index;
    this.pageChanged.emit(index);
  }

  private buildListOfPages(
    currentPage: number,
    total: number,
    pageSize: number
  ): number[] {
    const offset = Math.floor(pageSize / 2);

    if (currentPage < offset) {
      return this.generatePages(0, this.pageSize);
    } else if (currentPage < total - offset) {
      const start = currentPage - offset;
      const end = currentPage + offset + 1;

      return this.generatePages(start, end);
    } else {
      const start = total - offset * 2 - 1;
      return this.generatePages(start, total);
    }
  }

  private generatePages(start: number, end: number): number[] {
    const list = [];

    for (let i = start; i < end; i++) {
      list.push(i);
    }

    return list;
  }
}
