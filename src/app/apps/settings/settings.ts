import { AfterViewInit, Component } from '@angular/core';
import { AppBase } from '../../components/app/app';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-settings',
  imports: [AppBase, ButtonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings extends AppBase implements AfterViewInit {
  ngAfterViewInit(): void {
    const data = localStorage.getItem('settings');
    console.log('Loaded settings:', data);
  }
}
