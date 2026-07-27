import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[draggable]',
})
export class Draggable {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  private container!: HTMLElement;
  private offsetX = 0;
  private offsetY = 0;
  private savedTransition = '';

  ngOnInit() {
    this.container = this.elementRef.nativeElement.parentElement as HTMLElement;
    this.container.style.position = 'fixed';
    this.container.style.top = '24px';
    this.container.style.left = '24px';
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if ((event.target as HTMLElement).closest('.actions')) return;

    this.savedTransition = this.container.style.transition;
    this.container.style.transition = 'none';

    const rect = this.container.getBoundingClientRect();
    this.offsetX = event.clientX - rect.left;
    this.offsetY = event.clientY - rect.top;

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  private onMouseMove = (event: MouseEvent) => {
    this.container.style.left = `${event.clientX - this.offsetX}px`;
    this.container.style.top = `${event.clientY - this.offsetY}px`;
  };

  private onMouseUp = () => {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };
}