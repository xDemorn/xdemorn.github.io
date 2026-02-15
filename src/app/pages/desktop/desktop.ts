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
  @ViewChild('dynamicAppContainer', { read: ViewContainerRef }) dynamicAppContainer!: ViewContainerRef;

  // Expose AppType to the template
  public AppType = AppType;

  public open(type: AppType) {
    const c = this.appsService.getComponentForAppType(type);
    const component = this.dynamicAppContainer.createComponent(c);
    component.location.nativeElement.classList.add('app-window');
    console.log(component)

    this.appsService.open(type);
  }
}
