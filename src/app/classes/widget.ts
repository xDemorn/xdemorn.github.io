import { IApp } from "../interfaces";
import { AppType } from "../enums/app-types";
import { AppsService } from "../services/apps-service";

export abstract class Widget {
  protected readonly type: AppType = AppType.None;
  protected data: IApp | null = null;
  protected readonly appsService!: AppsService;
  protected initialDimensions: IWidgetDimensions = { top: 24, left: 24, width: 350, height: 400 };
  $element: any;

  constructor(type: AppType) {
    this.type = type;
  }

  onMinimize(): void {
    throw new Error('Method not implemented.');
  }

  onMaximize(): void {
    if (!this.$element) throw new Error('Element not found for maximizing');

    if (this.$element.classList.contains('maximized')) {
      this.$element.style.top = `${this.initialDimensions.top}px`;
      this.$element.style.left = `${this.initialDimensions.left}px`;
      this.$element.style.width = `${this.initialDimensions.width}px`;
      this.$element.style.height = `${this.initialDimensions.height}px`;
    } else {
      const $main = document.querySelector('main');
      if (!$main) throw new Error('Main element not found for maximizing');

      const { clientWidth: width, clientHeight: height } = $main;

      this.updateInitialDimensions();

      this.$element.style.top = '0px';
      this.$element.style.left = '0px';
      this.$element.style.width = `${width}px`;
      this.$element.style.height = `${height}px`;
    }

    this.$element.classList.toggle('maximized');
  }

  onClose(): void {
    throw new Error('Method not implemented.');
  }

  private updateInitialDimensions() {
    if (!this.$element) {
      console.error('Element not found for updating dimensions');
      return;
    }

    this.initialDimensions = {
      top: this.$element.offsetTop,
      left: this.$element.offsetLeft,
      width: this.$element.offsetWidth,
      height: this.$element.offsetHeight
    };
  }
}

export interface IWidgetDimensions {
  top: number;
  left: number;
  width: number;
  height: number;
}