import { Component, OnInit } from '@angular/core';
import { BlogModel } from 'src/interfaces/Blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogs!: BlogModel[];

  ngOnInit(): void {
    this.blogs = blogsJson;
  }

}

const blogsJson = [
  {
    "id": 1,
    "title": "I sold my startup because of bugs: I wish I had this serverless repository!",
    "content": "This is a very naive solution that was running on multiple EC2 (AWS) and Redis.In theory, it should work - Yes, you would need to scale the workers horizontally, but that was not my problem. I started to experience something else - memory leaks.As you probably know, Puppeteer - a chromium automated browser, is heavy (same as Chrome on your computer), and I was running lots of them - they sucked both my memory - causing the servers to stop working and took the internet bandwidth.",
    "image": "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fikv2vuehxrwp6k8nhyl3.png",
    "username": "Ranjan Dailata",
    "publishDate": "13 sept 2023",
    "tags": [
      "webdev",
      "javascript",
      "programming",
      "opensource"
    ]
  }
  ,
  {
    "id": 2,
    "title": "I sold my startup because of bugs: I wish I had this serverless repository!",
    "content": "This is a very naive solution that was running on multiple EC2 (AWS) and Redis.In theory, it should work - Yes, you would need to scale the workers horizontally, but that was not my problem. I started to experience something else - memory leaks.As you probably know, Puppeteer - a chromium automated browser, is heavy (same as Chrome on your computer), and I was running lots of them - they sucked both my memory - causing the servers to stop working and took the internet bandwidth.",
    "image": "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fikv2vuehxrwp6k8nhyl3.png",
    "username": "Ranjan Dailata",
    "publishDate": "13 sept 2023",
    "tags": [
      "webdev",
      "javascript",
      "programming",
      "opensource"
    ]
  }
];
