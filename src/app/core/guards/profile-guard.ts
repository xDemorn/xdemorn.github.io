import { CanMatchFn } from '@angular/router';

export const hasNotSelectedProfile: CanMatchFn = (route, segments) => {
  const profile = sessionStorage.getItem('profile');
  if (!profile) {
    return true;
  }
  return false;
};

export const hasSelectedProfile: CanMatchFn = (route, segments) => {
  const profile = sessionStorage.getItem('profile');
  if (!profile) {
    return false;
  }
  return true;
};
