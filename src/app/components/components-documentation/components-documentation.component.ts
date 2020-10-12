import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-components-documentation',
  templateUrl: './components-documentation.component.html',
  styleUrls: ['./components-documentation.component.scss'],
})
export class ComponentsDocumentationComponent {
  isLoading = false;
  title = 'challenges';
  progress = 25;
  rating = 3;
  cardControl = new FormControl('1111222233334444');

  updateProgress(): void {
    this.progress = 80;
  }

  showLoader(): void {
    this.isLoading = true;

    setTimeout(() => (this.isLoading = false), 5000);
  }
}
