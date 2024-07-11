import { Component } from '@angular/core';
import { MenuItems } from './models/menu-item';

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [...] // imports on parent Module
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  myMenuItems: MenuItems = [
    { path: '', label: 'Home'},
    { path: '/template-syntax', label: 'Template syntax'},
    { path: '/other', label: 'Other'}
  ];
}
