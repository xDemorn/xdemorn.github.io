const DEFAULT_OPTIONS: IApp = {
  id: null!,
  name: 'NAME NOT SET',
  icon: 'unknown.svg',
  canMinimize: true,
  canMaximize: true,
  canClose: true,
}

export interface IApp {
  id: string;
  name: string;
  icon: string;
  canMinimize: boolean;
  canMaximize: boolean;
  canClose: boolean;
}

export class App implements IApp {
  id: string;
  name: string;
  icon: string;
  canMinimize: boolean;
  canMaximize: boolean;
  canClose: boolean;

  constructor(config: IApp) {
    const values = { ...DEFAULT_OPTIONS, ...config };

    this.id = (Math.random() * 10_000).toString(36);

    this.name = values.name;
    this.icon = values.icon;
    this.canMinimize = values.canMinimize;
    this.canMaximize = values.canMaximize;
    this.canClose = values.canClose;
  }
}