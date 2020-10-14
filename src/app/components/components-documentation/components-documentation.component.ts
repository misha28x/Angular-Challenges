import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-components-documentation',
  templateUrl: './components-documentation.component.html',
  styleUrls: ['./components-documentation.component.scss'],
})
export class ComponentsDocumentationComponent {
  rating = 3;
  progress = 25;
  searchTerm = '';
  isLoading = false;
  title = 'challenges';
  cardControl = new FormControl('1111222233334444');

  updateProgress(): void {
    this.progress = 80;
  }

  showLoader(): void {
    this.isLoading = true;

    setTimeout(() => (this.isLoading = false), 5000);
  }

  updateSearchTerm(term: string): void {
    this.searchTerm = term;
  }
}
