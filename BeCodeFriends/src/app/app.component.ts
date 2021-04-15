import { Component } from '@angular/core';
import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  languages = ['JavaScript', 'PHP', 'Python', 'C#'];

  friendModel = new Friend('', '', '', '', '');

  onSubmit(): void {
    console.log(this.friendModel.firstName + ' ' + this.friendModel.lastName + ' ' + this.friendModel.favLanguage);
  }

}

