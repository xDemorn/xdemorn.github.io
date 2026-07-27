import { Component, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IWidgetDimensions } from '../../interfaces';
import { AppsService } from '@app/services/apps-service';
import { Draggable } from '@app/directives/draggable';

@Component({
  selector: 'base-widget',
  imports: [ButtonModule, Draggable],
  templateUrl: './base-widget.html',
  styleUrl: './base-widget.css',
})
export class BaseWidget {
  private readonly appsService = inject(AppsService);
  private initialDimensions: IWidgetDimensions = { top: 24, left: 24, width: 350, height: 400 };

  id = input.required<string>();
  icon = input.required<string>();
  name = input.required<string>();

  minimize() {
    throw new Error('Method not implemented.');
  }

  maximize() {
    throw new Error('Method not implemented.');
  }

  close() {
    this.appsService.close(this.id());
  }
}
