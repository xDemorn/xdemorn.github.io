import { IDesktopApp } from "./interfaces/desktop-app.interface";

export function createDesktopApp(name: string, icon: string, isTaskbar: boolean = false): HTMLDivElement {
  const $parent = document.createElement('div');
  const $img = document.createElement('img');
  const $span = document.createElement('span');

  $span.innerText = name;
  $img.src = icon;

  $parent.appendChild($img);
  $parent.appendChild($span);

  $parent.classList.add('desktop-app');
  if (isTaskbar) $parent.classList.add('taskbar');

  return $parent;
}

export function createAppHTML(app: IDesktopApp): HTMLDivElement {
  const $parent = document.createElement('div');
  $parent.classList.add('app');
  $parent.innerHTML = `
      <div class="header">
        <img src="${app.icon}" />
        <span>${app.name}</span>
        <div class="controls">
          <button class="minimize">
            <span>-</span>
          </button>
          <button class="maximize"">
            <span>+</span>
          </button>
          <button class="close">
            <span>&times;</span>
          </button>
        </div>
      </div>
      
      <div class="content">
        Content
      </div>
    `;

  return $parent;
}

export function setSystemTime($footer: Element): void {
  const now = new Date();
  $footer.querySelector('div#system-info')!.firstElementChild!.innerHTML = now.toLocaleTimeString();
  $footer.querySelector('div#system-info')!.lastElementChild!.innerHTML = now.toLocaleDateString();
}