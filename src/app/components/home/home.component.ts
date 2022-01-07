import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumnsUsers: string[] = ['id', 'firstname', 'lastname', 'email', 'username', 'roleid'];
  userSource: any;
  cardSource: any;
  userid: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.userid = localStorage.getItem("id");
  }

  private async getUsers() {
    try {
      const users = await this.userService.getUsers();
      if (users) {
        for (const user of users) {
          if (user.roleid == 1)
            user.roleid = "Admin";
          else
            user.roleid = "User";
        }
      }
      this.userSource = new MatTableDataSource<UserElement>(users);
      this.cardSource = this.userSource.data;
    } catch ({message}) {
      alert(message);
    }
  }

  seeUser(row:any)
  {
    console.log(row);
  }


}

export interface UserElement {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  roleid: any;
}


