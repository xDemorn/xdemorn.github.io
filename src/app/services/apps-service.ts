import { ApplicationRef, inject, Injectable, createComponent, EnvironmentInjector, Type, ComponentRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppType } from '../enums/app-types';
import { Settings } from '@widgets/settings/settings';
import { IApp } from '../interfaces';
import { MessageService } from 'primeng/api';

const AVAILABLE_APPS: Partial<Record<AppType, Type<any>>> = {
  [AppType.Settings]: Settings,
  // [AppType.Browser]: Settings
};

@Injectable({
  providedIn: 'root',
})
export class AppsService {
  private readonly application = inject(ApplicationRef);
  private readonly environmentInjector = inject(EnvironmentInjector);
  private readonly messageService = inject(MessageService);

  $openedApps: BehaviorSubject<Array<IApp>> = new BehaviorSubject<Array<IApp>>([]);

  openedApps: Record<string, { host: HTMLElement, ref: ComponentRef<any> }> = {}

  open(type: AppType) {
    if (type in AVAILABLE_APPS === false) {
      console.error(`App of type ${type} is not available to open.`);
      this.messageService.add({ severity: 'error', summary: 'App Not Available', detail: `App of type ${type} is not available to open.` });
      return;
    }

    const $container = document.createElement('div');
    $container.classList.add('window-container');

    const comp = createComponent(AVAILABLE_APPS[type]!, { hostElement: $container, environmentInjector: this.environmentInjector });
    $container.id = comp.instance.id

    this.application.attachView(comp.hostView);

    document.body.appendChild($container);

    this.openedApps[comp.instance.id] = { host: $container, ref: comp };
  }

  close(id: string) {
    console.log(id)
    console.log(this.openedApps)
    const data = this.openedApps[id];
    console.log(data)

    if (!data) return;

    this.application.detachView(data.ref.hostView);
    data.ref.destroy();
    document.body.removeChild(data.host);

    delete this.openedApps[id];
  }
}
