import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-base',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppBase {
  icon = input<string>();
  name = input<string>();

  onClose = output<void>();
}
