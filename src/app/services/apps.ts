import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppBase } from '../components/app/app';
import { AppType } from '../enums/app-types';
import { Settings } from '../apps';

@Injectable({
  providedIn: 'root',
})
export class Apps {
  $openedApps: BehaviorSubject<Array<AppBase>> = new BehaviorSubject<Array<AppBase>>([]);

  public open(app: AppType) {
    const currentApps = this.$openedApps.value;
    currentApps.push(this.getAppBaseForAppType(app));
    this.$openedApps.next(currentApps);
  }

  public getComponentForAppType(app: AppType) {
    switch (app) {
      // case AppType.Browser:
      //   return import('../components/browser/browser').then(m => m.Browser);
      case AppType.Settings:
        return Settings;
      default:
        throw new Error(`Unknown app type: ${app}`);
    }
  }

  public getAppBaseForAppType(app: AppType): AppBase {
    switch (app) {
      // case AppType.Browser:
      //   return new Browser();
      case AppType.Settings:
        return new Settings();
      default:
        throw new Error(`Unknown app type: ${app}`);
    }
  }
}
