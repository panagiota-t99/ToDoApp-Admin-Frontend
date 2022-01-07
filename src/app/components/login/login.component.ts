import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
  }


  async loginFunction(): Promise<any> {
    if (this.username.status == "VALID" && this.password.status == "VALID") {
      try {
        const token = await this.userService.login(this.username.value, this.password.value);
        if (token) {
          localStorage.setItem("token", token.accessToken);
          await this.router.navigate(['admin/home']);

        }
      } catch ({message}) {
        alert(message);
      }
    } else
      alert("Please fill in the form!");
  }



}
