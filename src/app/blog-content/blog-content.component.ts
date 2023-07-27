import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {
  usersArr = new Array<any>();

  constructor(public userSer: UserServiceService) { }

  ngOnInit(): void {
    this.userSer.getUser().subscribe(response => {
      this.usersArr = response;
      console.warn(response);

    })
  }

}
