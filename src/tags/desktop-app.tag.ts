import './desktop-app.tag.css'

export class DesktopAppElement extends HTMLElement {
  name: string;
  icon: string;
  taskbar: boolean;

  constructor() {
    super();

    this.name = this.getAttribute('name')!;
    this.icon = this.getAttribute('icon') || 'unknown.svg';
    this.taskbar = Boolean(this.getAttribute('taskbar')) || false;
  }

  // Lifecycle method: Invoked when added to the DOM
  connectedCallback() {
    const $img = document.createElement('img');
    const $span = document.createElement('span');

    $img.setAttribute('src', this.icon);

    $span.textContent = this.name;

    this.appendChild($img);
    this.appendChild($span);
  }

  // Lifecycle method: Invoked when removed from the DOM
  disconnectedCallback() {}
}