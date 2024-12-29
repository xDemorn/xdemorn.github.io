const DEFAULT_OPTIONS: IApp = {
  name: 'NAME NOT SET',
  icon: 'ICON',
  canMinimize: true,
  canMaximize: true,
  canClose: true,
}

export interface IApp {
  name: string;
  icon: string;
  canMinimize: boolean;
  canMaximize: boolean;
  canClose: boolean;
}

export class App {
  name: string;
  icon: string;
  canMinimize: boolean;
  canMaximize: boolean;
  canClose: boolean;

  constructor(config: IApp) {
    const values = { ...DEFAULT_OPTIONS, ...config };

    this.name = values.name;
    this.icon = values.icon;
    this.canMinimize = values.canMinimize;
    this.canMaximize = values.canMaximize;
    this.canClose = values.canClose;
  }
}