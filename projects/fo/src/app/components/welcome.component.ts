import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <p>Welcome {{ name }} </p>
  `
})
export class WelcomeComponent {
  @Input()
  name!: string;
}
