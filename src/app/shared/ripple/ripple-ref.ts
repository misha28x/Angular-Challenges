export class RippleRef {
  constructor(
    private renderer: { fadeOutRipple(ref: RippleRef): void },
    public element: HTMLElement
  ) {}

  fadeOut() {
    this.renderer.fadeOutRipple(this);
  }
}
