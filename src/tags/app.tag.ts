import './app.tag.css'

export class AppElement extends HTMLElement {
  name: string;
  icon: string;

  constructor() {
    super();

    this.name = this.getAttribute('name') || 'NOT/SET';
    this.icon = this.getAttribute('icon') || 'unknown.svg';
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header">
        <img src="${this.icon}" />
        <span>${this.name}</span>
        <div class="controls">
          <button class="minimize">-</button>
          <button class="maximize"">+</button>
          <button class="close">&times;</button>
        </div>
      </div>
      
      <slot name="content">Default content</slot>
    `;

    this.querySelector('.minimize')!.addEventListener('click', this.onMinimize);
    this.querySelector('.maximize')!.addEventListener('click', this.onMaximize);
    this.querySelector('.close')!.addEventListener('click', this.onClose);
  }

  onMinimize() {
    console.log('on minimize')
  }

  onMaximize() {
    console.log('on maximize')
  }

  onClose() {
    console.log('on close')
  }
}