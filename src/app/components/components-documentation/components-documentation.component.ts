import { Component } from '@angular/core';

@Component({
  selector: 'app-components-documentation',
  templateUrl: './components-documentation.component.html',
  styleUrls: ['./components-documentation.component.scss'],
})
export class ComponentsDocumentationComponent {
  title = 'challenges';
  progress = 25;
  rating = 3;

  updateProgress(): void {
    this.progress = 80;
  }
}
