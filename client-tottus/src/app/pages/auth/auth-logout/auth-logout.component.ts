import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.css']
})
export class AuthLogoutComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.userService.clean();
    this.router.navigate(['/', 'auth', 'login']);
  }

}
