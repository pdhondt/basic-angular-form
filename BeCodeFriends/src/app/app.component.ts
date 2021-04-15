import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  languages = ['JavaScript', 'PHP', 'Python', 'C#'];

  friendModel = new Friend('', '', '', '', '');

  constructor(private _addFriendService: AddFriendService) {
  }

  onSubmit() {
    this._addFriendService.addFriend(this.friendModel)
      .subscribe(
        data => console.log('it worked', data),
        error => console.error('it did not work', error)
     );
  }

}

