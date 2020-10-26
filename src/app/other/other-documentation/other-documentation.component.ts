import { Component, OnInit } from '@angular/core';
import { fadeOut, FadeOutState } from '../fade-out/fade-out-animation';

@Component({
  selector: 'app-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrls: ['./other-documentation.component.scss'],
  animations: [fadeOut],
})
export class OtherDocumentationComponent {
  fadeOutState: FadeOutState = 'in';

  toggleAnimation() {
    this.fadeOutState = this.fadeOutState === 'in' ? 'out' : 'in';
  }
}
