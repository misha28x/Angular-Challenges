import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {
  @Input() max = 5;
  @Input() rating: number;

  @Output() ratingChanged = new EventEmitter();

  private hoverRating = 0;

  get stars(): number[] {
    return [...Array(this.max).keys()].map((_, i) => i + 1);
  }

  isActive(star): boolean {
    return star <= this.rating || star <= this.hoverRating;
  }

  rate(value): void {
    this.ratingChanged.emit(value);
  }

  setHoverRating(val): void {
    this.hoverRating = val;
  }

  resetHoverRating(): void {
    this.hoverRating = 0;
  }
}
