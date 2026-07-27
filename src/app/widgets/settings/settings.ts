import { Component, signal } from '@angular/core';
import { BaseWidget } from '../../components/base-widget/base-widget';
import { ISettings } from '../../interfaces';

@Component({
  selector: 'widget-settings',
  imports: [BaseWidget],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  id = crypto.randomUUID();
  name = 'Settings';
  icon = 'favicon.ico';
  settings = signal<ISettings | null>(null);
}
