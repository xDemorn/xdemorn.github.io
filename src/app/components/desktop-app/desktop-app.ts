import { Component, input } from '@angular/core';

@Component({
  selector: 'desktop-app',
  imports: [],
  templateUrl: './desktop-app.html',
  styleUrl: './desktop-app.css',
})
export class DesktopApp {
  icon = input<string>();
  name = input<string>();
}
