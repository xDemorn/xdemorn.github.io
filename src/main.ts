import { App } from "./app.model";
import { getDesktopApps } from "./config";
import { AppElement } from "./tags/app.tag";
import { DesktopAppElement } from "./tags/desktop-app.tag";

// register custom elements
customElements.define('desktop-app', DesktopAppElement);
customElements.define('custom-app', AppElement);

const $main = document.querySelector('main#main-window')!;
const $footer = document.querySelector('footer#main-footer')!;

document.body.addEventListener('contextmenu', e => {
  e.preventDefault();
});

const apps: Record<string, App> = {};

// add saved desktop icons
getDesktopApps().forEach(app => {
  const { name, icon } = app;

  const $app = document.createElement('desktop-app') as DesktopAppElement;
  $app.name = name;
  $app.icon = icon;

  $app.addEventListener('dblclick', () => {
    console.log('dblclick', name);

    const $a = document.createElement('custom-app') as AppElement;
    $a.name = name;
    $a.icon = icon;

    $main.appendChild($a);

    const $b = $app.cloneNode(true) as DesktopAppElement;
    $b.taskbar = true;

    $footer.querySelector('div#taskbar')!.appendChild($b);
  });

  $main.appendChild($app);
});