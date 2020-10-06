import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'challenges';
  progress = 25;

  updateProgress(): void {
    this.progress = 80;
  }
}
