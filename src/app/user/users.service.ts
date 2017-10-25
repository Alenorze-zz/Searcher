import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  size = 12;

  constructor(private http: Http) { }

  setSize(size) {
    this.size = size;
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + ' &nat=gb%27')
      .map(function(response) {
         return response.json();
      })
      .map(response => response.results)
      .map(users => {
        return users.map(u => {
          return {
            name: u.name.first + ' ' + u.name.last,
            image: u.picture.large,
            geo: u.location.city + ', ' + u.location.street
          };
        });
      });
  }


}


