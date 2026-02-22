import { Component, inject, input, output, signal } from '@angular/core';
import { IApp } from '../../interfaces/app';
import { AppsService } from '../../services/apps-service';
import { AppType } from '../../enums/app-types';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'base-widget',
  imports: [ButtonModule],
  templateUrl: './base-widget.html',
  styleUrl: './base-widget.css',
})
export class BaseWidget {
  public readonly type = input.required<AppType>();
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
