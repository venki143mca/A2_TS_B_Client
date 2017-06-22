import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { UserService } from './user.service'
import { User } from './user';
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';


@Component({
  selector: 'my-app',
  templateUrl: './user.login.html'
})
export class UserComponent {

  public user: User = new User();

  constructor(public userService: UserService,
    public router: Router) {
  }

  ngOnInit() {
  }

  // login() {
  //   this.userService.getUser(this.user).subscribe(
  //     (res: any) => {
  //       const result = res.result;
  //       if (result.length) {
  //         console.log("login successfull");
  //         this.router.navigate(['employee']);
  //       } else {
  //         console.log("login failed.")
  //       }
  //     }
  //   );
  // }

  login() {
    this.userService.login(this.user).subscribe(
      (res: any) => {
        if(res) {
           this.router.navigate(['employee']);
        }
      }
    );
  }

}
