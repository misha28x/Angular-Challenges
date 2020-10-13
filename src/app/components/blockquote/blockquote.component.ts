import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-blockquote',
  templateUrl: './blockquote.component.html',
  styleUrls: ['./blockquote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockquoteComponent {
  @Input() quote: string;
  @Input() author: string;
  @Input() about: string;
}
