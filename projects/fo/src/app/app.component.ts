import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [...] // imports on parent Module
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fo';
  today = new Date();
  loading = true;
  words = ['Hello', 'world'];

  toggleLoading() {
    this.loading = !this.loading;
  }
}
