import { Component,Input } from '@angular/core';
import { BlogModel } from 'src/interfaces/Blog';

@Component({
  selector: 'app-blog-container',
  templateUrl: './blog-container.component.html',
  styleUrls: ['./blog-container.component.scss']
})
export class BlogContainerComponent {

  @Input() singleBlog!:BlogModel;

}
