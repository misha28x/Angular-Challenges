import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @HostBinding('class.hidden') get isHidden(): boolean {
    return !this.show;
  }

  @Input() show = false;
}
