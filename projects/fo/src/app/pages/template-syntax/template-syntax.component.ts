import { Component } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrl: './template-syntax.component.scss'
})
export class TemplateSyntaxComponent {
  title = 'fo';
  today = new Date();
  loading = true;
  words = ['Hello', 'world'];

  toggleLoading() {
    this.loading = !this.loading;
  }
}
