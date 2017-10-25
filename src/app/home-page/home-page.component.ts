import { UsersService } from './../user/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  users = [];
  searchStr = '';

  constructor(private UsersService: UsersService) {}

  ngOnInit() {
    this.UsersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
