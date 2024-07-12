import { Component, Input } from '@angular/core';
import { MenuItems } from '../../models/menu-item';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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

  // classic constructor syntax to initialize attributes
  // private router;
  //
  // constructor(router: Router) {
  //   this.router = router;
  // }

  // same as (shortcut with typescript)
  constructor(
    private router: Router,
    private location: Location
  ) { }


  goBack() {
    this.location.back();
  }

}
