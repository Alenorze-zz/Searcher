import { UsersService } from './../user/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.sass']
})
export class SetupPageComponent implements OnInit {

  size;

  constructor(private usersService: UsersService) {

  }

  onChange() {
    this.usersService.setSize(+this.size);
  }

  ngOnInit() {
    this.size = this.usersService.size;
  }

}
