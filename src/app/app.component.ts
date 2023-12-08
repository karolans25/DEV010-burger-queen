import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth/authentication.service';
// import { Router } from '@angular/router';
// import { AuthService } from './core/services/auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DEV010-burger-queen';

  constructor(public router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.systemUser$.subscribe((user) => {
      if (!user) {
        this.router.navigate(['login']);
        return;
      } else {
        // console.log(route);
        // this.router.navigate(['dashboard']);
      }
    });
  }

}
