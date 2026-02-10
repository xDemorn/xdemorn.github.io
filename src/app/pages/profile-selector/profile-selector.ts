import { Component, inject, signal } from '@angular/core';
import { Profile } from '../../interfaces/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-selector',
  imports: [],
  templateUrl: './profile-selector.html',
  styleUrl: './profile-selector.css',
})
export class ProfileSelector {
  private router = inject(Router);

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

    this.router.navigate(['/']);
  }
}
