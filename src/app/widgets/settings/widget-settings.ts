import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BaseWidget } from '../../components/base-widget/base-widget';
import { Widget } from '../../classes/widget';
import { AppType } from '../../enums/app-types';
import { AppsService } from '../../services/apps-service';
import { ISettings } from '../../interfaces';

@Component({
  selector: 'widget-settings',
  imports: [BaseWidget, ButtonModule],
  templateUrl: './widget-settings.html',
  styleUrl: './widget-settings.css',
})
export class Settings extends Widget {
  override readonly appsService = inject(AppsService);
  
  settings = signal<ISettings | null>(null);

  constructor() {
    super(AppType.Settings);

    this.data = this.appsService.get(this.type);

    const data = localStorage.getItem('settings');
    this.settings.set(data ? JSON.parse(data) as ISettings : null); // TODO: create default settings
    console.log('Settings:', this.settings());
  }
}
