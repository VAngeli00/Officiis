import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private _authService: AuthService) {}
}
