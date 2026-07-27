import { Component, inject, ViewContainerRef } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { DesktopApp } from '../../components/desktop-app/desktop-app';
import { AppsService } from '../../services/apps-service';
import { AppType } from '../../enums/app-types';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-desktop',
  imports: [Footer, DesktopApp, ToastModule],
  templateUrl: './desktop.html',
  styleUrl: './desktop.css'
})
export class Desktop {
  protected readonly appsService = inject(AppsService);

  public apps: Array<{ type: AppType, icon: string, name: string }> = [
    { type: AppType.Settings, icon: 'favicon.ico', name: 'Settings' },
    { type: AppType.Browser, icon: 'favicon.ico', name: 'Browser' },
  ];
}
