import { Injectable } from '@angular/core';
import { App } from '../app';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Apps {
  $openedApps: BehaviorSubject<Array<App>> = new BehaviorSubject<Array<App>>([]);

  public open(app: App) {}
}
