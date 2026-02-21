import { Component, inject, ViewContainerRef, ViewChild } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { DesktopApp } from '../../components/desktop-app/desktop-app';
import { Apps } from '../../services/apps';
import { AppType } from '../../enums/app-types';

@Component({
  selector: 'app-desktop',
  imports: [Footer, DesktopApp],
  templateUrl: './desktop.html',
  styleUrl: './desktop.css'
})
export class Desktop {
  private appsService = inject(Apps);
  private vcr = inject(ViewContainerRef);

  public apps: Array<{ type: AppType, icon: string, name: string }> = [
    { type: AppType.Settings, icon: 'favicon.ico', name: 'Settings' },
    { type: AppType.Browser, icon: 'favicon.ico', name: 'Browser' },
  ];

  // Expose AppType to the template
  public AppType = AppType;

  public open(type: AppType) {
    const s = this.appsService.get(type);
    if (!s) {
      console.error(`App not found for type: ${type}`);
      return;
    }

    const component = this.vcr.createComponent(s.component);
    component.location.nativeElement.classList.add('app-window');
    component.setInput('type', type);
    component.setInput('data', s);

    component.instance.loadSettings();

    component.changeDetectorRef.detectChanges();

    // TODO: rework
    // this.appsService.open(type);
  }
}
