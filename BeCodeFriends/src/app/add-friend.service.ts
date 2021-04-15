import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  _url = 'http://localhost:9078/addFriend/';

  constructor(
    private _http: HttpClient
  ) { }

  addFriend(newFriend: Friend) {
    return this._http.post(this._url, newFriend);
  }

}
