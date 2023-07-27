import { Component } from '@angular/core';

@Component({
  selector: 'app-write-content',
  templateUrl: './write-content.component.html',
  styleUrls: ['./write-content.component.css']
})
export class WriteContentComponent {
  getFormData(title: string, content: string) {
    console.warn("title is :- " + title + " and content is " + content)
  }
}
