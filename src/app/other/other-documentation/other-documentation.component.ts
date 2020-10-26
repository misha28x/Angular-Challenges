import { Component, OnInit } from '@angular/core';
import { fadeInOut, FadeOutState } from '../fade-out/fade-in-out-animation';

@Component({
  selector: 'app-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrls: ['./other-documentation.component.scss'],
  animations: [fadeInOut],
})
export class OtherDocumentationComponent {
  fadeOutState: FadeOutState = 'in';

  toggleAnimation() {
    this.fadeOutState = this.fadeOutState === 'in' ? 'out' : 'in';
  }
}
