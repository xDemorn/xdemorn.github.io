import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppType } from '../enums/app-types';
import { Settings } from '../widgets';
import { IApp } from '../interfaces/app';

const AVAILABLE_APPS: Map<AppType, IApp> = new Map<AppType, IApp>([
  [AppType.Settings, {
    id: "settings",
    icon: "favicon.ico",
    name: "Settings",
    component: Settings
  }]
]);

@Injectable({
  providedIn: 'root',
})
export class AppsService {
  $openedApps: BehaviorSubject<Array<IApp>> = new BehaviorSubject<Array<IApp>>([]);

  public open(app: AppType) {
    const currentApps = this.$openedApps.value;
    currentApps.push(AVAILABLE_APPS.get(app)!);
    this.$openedApps.next(currentApps);
  }

  public get(type: AppType): IApp | null {
    return AVAILABLE_APPS.get(type) ?? null;
  }
}
