import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BaseWidget } from '../../components/base-widget/base-widget';
import { IWidget } from '../../interfaces/widget';
import { AppType } from '../../enums/app-types';
import { IApp } from '../../interfaces/app';
import { AppsService } from '../../services/apps-service';
import { ISettings } from '../../interfaces/settings';

@Component({
  selector: 'widget-settings',
  imports: [BaseWidget, ButtonModule],
  templateUrl: './widget-settings.html',
  styleUrl: './widget-settings.css',
})
export class Settings implements AfterViewInit, IWidget {
  readonly appsService = inject(AppsService);

  readonly type: AppType;
  readonly data: IApp | null;
  settings = signal<ISettings | null>(null);

  constructor() {
    this.type = AppType.Settings;
    this.data = this.appsService.get(this.type);
  }

  ngAfterViewInit(): void {
    const data = localStorage.getItem('settings');
    this.settings.set(data ? JSON.parse(data) as ISettings : null); // TODO: create default settings
    console.log('Settings:', this.settings());
  }

  onMinimize(): void {
    throw new Error('Method not implemented.');
  }

  onMaximize(): void {
    throw new Error('Method not implemented.');
  }

  onClose(): void {
    throw new Error('Method not implemented.');
  }
}
