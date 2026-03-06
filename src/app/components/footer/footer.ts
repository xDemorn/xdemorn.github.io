import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppsService } from '../../services/apps-service';
import { IApp } from '../../interfaces/app';
import { ProfileService } from '../../services/profile-service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit, OnDestroy {
  private appsService = inject(AppsService);
  private profileService = inject(ProfileService);

  private dateInterval: any;
  private $subs: Array<Subscription> = [];

  public now: number = Date.now();
  public apps = signal([] as Array<IApp>);

  protected readonly initials = computed(() => {
    const profile = this.profileService.$activeProfile.getValue();
    
    if (!profile) return '';

    return profile.name.split(' ').map(part => part[0]).join('');
  });

  ngOnInit(): void {
    this.now = Date.now();
    this.dateInterval = setInterval(() => {
      this.now = Date.now();
    }, 1000);

    this.$subs.push(this.appsService.$openedApps.subscribe((apps: Array<IApp>) => this.apps.set([ ...apps ])));


  }

  ngOnDestroy(): void {
    if (this.dateInterval) {
      clearInterval(this.dateInterval);
      this.dateInterval = null;
    }

    this.$subs.forEach(sub => sub.unsubscribe());
  }

  public formatTime(): string {
    return new Date(this.now).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  public formatDate(): string {
    return new Date(this.now).toLocaleDateString([], { month: 'numeric', day: 'numeric', year: 'numeric' });
  }
}
