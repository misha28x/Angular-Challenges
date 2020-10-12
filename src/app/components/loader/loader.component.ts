import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input()
  @HostBinding('class.loading')
  loading: boolean;

  @Input() type: 'circular' | 'text' = 'circular';
  @Input() loadingText = 'Loading';
}
