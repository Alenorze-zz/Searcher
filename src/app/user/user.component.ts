import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  @Input() user;
  isMarked = false;

  onClick() {
    this.isMarked = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
