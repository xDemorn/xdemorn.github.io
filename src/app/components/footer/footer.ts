import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppsService } from '../../services/apps-service';
import { ProfileService } from '../../services/profile-service';
import { IApp } from '../../interfaces';

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

  public now: Date = new Date();
  public apps = signal<Array<IApp>>([]);

  protected readonly initials = computed(() => {
    const profile = this.profileService.$activeProfile.getValue();
    
    if (!profile) return '';

    return profile.name.split(' ').map(part => part[0]).join('');
  });

  ngOnInit(): void {
    this.now = new Date();
    this.dateInterval = setInterval(() => {
      this.now = new Date();
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
    return this.now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  public formatDate(): string {
    return this.now.toLocaleDateString([], { month: 'numeric', day: 'numeric', year: 'numeric' });
  }
}
