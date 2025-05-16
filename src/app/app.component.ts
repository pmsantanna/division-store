import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'division-store';

  constructor(private router: Router) {
    const redirect = window.location.search.replace('?redirect=', '');
    if (redirect) {
      this.router.navigateByUrl(redirect);
    }
  }
}
