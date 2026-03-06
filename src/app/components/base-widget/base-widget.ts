import { Component, input, output } from '@angular/core';
import { IApp } from '../../interfaces/app';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'base-widget',
  imports: [ButtonModule],
  templateUrl: './base-widget.html',
  styleUrl: './base-widget.css',
})
export class BaseWidget {
  public readonly data = input.required<IApp | null>();

  onMinimize = output<void>();
  onMaximize = output<void>();
  onClose = output<void>();

  minimize() {
    this.onMinimize.emit();
  }

  maximize() {
    this.onMaximize.emit();
  }

  close() {
    this.onClose.emit();
  }
}
