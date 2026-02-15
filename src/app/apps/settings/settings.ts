import { Component, InputSignal } from '@angular/core';
import { AppBase } from '../../components/app/app';

@Component({
  selector: 'app-settings',
  imports: [AppBase],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings extends AppBase {
}
