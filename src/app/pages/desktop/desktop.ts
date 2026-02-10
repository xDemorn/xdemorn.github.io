import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { App } from '../../components/app/app';
import { DesktopApp } from '../../components/desktop-app/desktop-app';

@Component({
  selector: 'app-desktop',
  imports: [Footer, App, DesktopApp],
  templateUrl: './desktop.html',
  styleUrl: './desktop.css'
})
export class Desktop {
  public open(app: App) {}
}
