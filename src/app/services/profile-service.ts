import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  $activeProfile = new BehaviorSubject<Profile | null>(null);

  constructor() {
    const storedProfile = sessionStorage.getItem('profile');
    if (storedProfile) {
      const profile = JSON.parse(storedProfile) as Profile;
      this.$activeProfile.next(profile);
    }
  }

  changeProfile(profile: Profile) {
    this.$activeProfile.next(profile);
  }
}
