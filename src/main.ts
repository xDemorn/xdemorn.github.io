import { getDesktopApps } from "./config";
import { Records } from "./classes/records.class";
import { IDesktopApp } from "./interfaces/desktop-app.interface";
import { createAppHTML, createDesktopApp, setSystemTime } from "./utils";
import { CONSTS } from "./consts";

export function $<T>(tag: string) {
  return document.querySelector(tag) as T || null;
}

const $main = $<Element>(CONSTS.html.main)!;
const $footer = $<Element>(CONSTS.html.footer)!;

document.body.addEventListener('contextmenu', e => {
  e.preventDefault();
});

// setInterval(() => setSystemTime($footer), 1000);

// List of opened apps
const records: Records = new Records();

// add saved desktop icons
getDesktopApps().forEach(app => {
  const $app = createDesktopApp(app.name, app.icon);
  $app.addEventListener('dblclick', () => onClickDesktopApp(app));

  $main.appendChild($app);
});

function onClickDesktopApp(app: IDesktopApp): void {
  const $window = records.add(app);

  $main.append($window);

  const $footerApp = createDesktopApp(app.name, app.icon, true);
  $footerApp.id = $window.id;
  $footerApp.addEventListener('click', () => onClickFooterApp(app));

  $footer.querySelector('div#taskbar')!.appendChild($footerApp);
}

function onClickFooterApp(app: IDesktopApp): void {
  //console.log(apps[app.name]!.classList.contains('hide'));
}