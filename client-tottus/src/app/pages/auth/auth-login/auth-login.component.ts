import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  login(email: string, password: string): void {
    // tslint:disable-next-line: deprecation
    this.authService.login({email, password}).subscribe(
      (response) => {
        this.userService.byToken(response.token);
        this.navigate();
      },
      (err) => console.error(err),
    );
  }

  navigate(): void {
    // tslint:disable-next-line: deprecation
    this.userService.getUser().subscribe(
      (user) => {
        if (user.rol === 'RL') {
          this.router.navigate(['/rl']);
        } else if (user.rol === 'BOSS') {
          this.router.navigate(['/boss']);
        } else {
         //
        }
      },
      console.error
    );
  }


}
