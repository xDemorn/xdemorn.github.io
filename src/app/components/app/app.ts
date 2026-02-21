import { ChangeDetectorRef, Component, inject, input, OnInit, signal } from '@angular/core';
import { IApp } from '../../interfaces/app';
import { Apps } from '../../services/apps';
import { AppType } from '../../enums/app-types';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-base',
  imports: [ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppBase {
  // private cdr = inject(ChangeDetectorRef);
  private appsService = inject(Apps);

  protected type = input(AppType.None);
  public data = input<IApp | null>(null);

  protected settings = signal<IApp | null>(null);

  public loadSettings() {
    const s = this.appsService.get(this.type());
    this.settings.set(s);
  }
}
