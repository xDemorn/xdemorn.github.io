import { Component, inject, signal } from '@angular/core';
import { Profile } from '../../interfaces/profile';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile-service';

@Component({
  selector: 'app-profile-selector',
  imports: [],
  templateUrl: './profile-selector.html',
  styleUrl: './profile-selector.css',
})
export class ProfileSelector {
  private readonly router = inject(Router);
  private readonly profileService = inject(ProfileService);

  protected readonly profiles = signal<Array<Profile>>([
    {
      img: '',
      name: 'Mikolaj Jaworski',
      isGuest: false,
    },
    {
      img: '',
      name: 'Guest User',
      isGuest: true,
    }
  ]);

  public selectProfile(profile: Profile): void {
    sessionStorage.setItem('profile', JSON.stringify(profile));

    this.profileService.changeProfile(profile);

    this.router.navigate(['/']);
  }
}
