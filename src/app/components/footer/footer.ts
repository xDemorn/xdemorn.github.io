import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { AppBase } from '../app/app';
import { Subscription } from 'rxjs';
import { Apps } from '../../services/apps';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit, OnDestroy {
  private appsService = inject(Apps);

  private dateInterval: any;
  private $apps!: Subscription;

  public now: number = Date.now();
  public apps = signal([] as Array<AppBase>);

  ngOnInit(): void {
    this.now = Date.now();
    this.dateInterval = setInterval(() => {
      this.now = Date.now();
    }, 1000);

    this.$apps = this.appsService.$openedApps.subscribe(apps => this.apps.set([ ...apps ]));
  }

  ngOnDestroy(): void {
    if (this.dateInterval) {
      clearInterval(this.dateInterval);
      this.dateInterval = null;
    }

    this.$apps.unsubscribe();
  }

  public formatTime(): string {
    return new Date(this.now).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  public formatDate(): string {
    return new Date(this.now).toLocaleDateString([], { month: 'numeric', day: 'numeric', year: 'numeric' });
  }
}
