import {Component, OnInit} from '@angular/core';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  languages = ['JavaScript', 'PHP', 'Python', 'C#'];

  friendModel = new Friend('', '', '', '', '');

  allFriends = [];

  constructor(private _addFriendService: AddFriendService) {
  }

  ngOnInit(): any {
    this.getAllFriends('http://localhost:9078/allFriends');
    console.log(this.allFriends);
  }

  onSubmit(): void {
    this._addFriendService.addFriend(this.friendModel)
      .subscribe(
        success => this.getAllFriends('http://localhost:9078/allFriends'),
        error => console.error('it did not work', error)
      );
    console.log(this.allFriends);
  }

  public async getAllFriends(url: string): Promise<any> {
    return await fetch(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => this.allFriends = data);
  }

}

