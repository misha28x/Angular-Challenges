import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @ViewChild(TemplateRef, { static: true }) tabContent: TemplateRef<any>;

  @Input() label = '';

  origin: number;
  position: number;

  private portal: TemplatePortal | null = null;

  get content(): TemplatePortal {
    return this.portal;
  }

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.portal = new TemplatePortal(this.tabContent, this.viewContainerRef);
  }
}
