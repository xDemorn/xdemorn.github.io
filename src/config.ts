import { IDesktopApp } from "./interfaces/desktop-app.interface"

export const DEFAULTS = {
  desktopApps: [
    {
      name: 'About',
      icon: 'system-os.png'
    }
  ]
}

export function getDesktopApps(): Array<IDesktopApp> {
  const apps = localStorage.getItem('desktop-apps');

  if (!apps) return DEFAULTS.desktopApps;

  return JSON.parse(apps) as Array<IDesktopApp>;
}