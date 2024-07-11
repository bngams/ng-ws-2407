import { Component, Input } from '@angular/core';
import { MenuItems } from '../../models/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // menuItems: string[] = ['Home', 'Syntax', '...'];
  // same as (type inference)

  // no type inference here (complex type)
  // menuItems: MenuItems  = [
  //   { path: '', label: 'Home'},
  //   { path: '', label: 'Syntax'},
  //   { path: '', label: 'Other'},
  // ];

  @Input()
  menuItems!: MenuItems;

}
