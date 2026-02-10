import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  icon = input<string>();
  name = input<string>();

  onClose = output<void>();
}
