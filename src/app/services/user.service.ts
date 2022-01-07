import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {CommonService} from "./common.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private commonService: CommonService, private router: Router) {
  }

  async login(username: String, password: String): Promise<any> {
    try {
      const res = await this.commonService.postRequest('admin/login', {username, password});
      return res;
    } catch (e) {
      if (e instanceof HttpErrorResponse)
        if (e.status == 401)
          throw {message: 'Unauthorized access! :('};
        else if (e.status == 404)
          throw {message: 'User not found! :('};

    }
  }

  async getUsers() {
    try {
      const res = await this.commonService.getRequest('users/all');
      return res;
    } catch (e) {
      if (e instanceof HttpErrorResponse)
        if (e.status == 401)
          await this.router.navigate(['login']);
    }
  }
}
