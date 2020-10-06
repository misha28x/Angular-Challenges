import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  @Input() max = 100;
  @Input() progress: number;

  get currentProgress(): number {
    return this.progress / this.max;
  }
}
