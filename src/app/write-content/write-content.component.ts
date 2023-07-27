import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-write-content',
  templateUrl: './write-content.component.html',
  styleUrls: ['./write-content.component.css']
})
export class WriteContentComponent {
  constructor(private userService: UserServiceService) { }
  getFormData(title: string, content: string) {
    // console.warn("title is :- " + title + " and content is " + content);
    const u = new User(title, content);
    this.userService.saveUser(u).subscribe((response: any) => {
      console.log(response);
    });
    console.log(u.title + "content" + u.content);

  }
}
