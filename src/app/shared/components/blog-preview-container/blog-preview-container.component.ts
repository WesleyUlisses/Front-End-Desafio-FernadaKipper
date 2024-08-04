import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPreviewPostsComponent } from '../blog-preview-posts/blog-preview-posts.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blog-preview-container',
  standalone: true,
  imports: [ CommonModule, BlogPreviewPostsComponent ],
  templateUrl: './blog-preview-container.component.html',
  styleUrl: './blog-preview-container.component.css'
})
export class BlogPreviewContainerComponent implements AfterViewInit{

  posts = [
    {
      id: '1',
      title: 'Post 1',
      description: 'Description 1',
      image: 'https://apoioecocrise.vercel.app/assets/images/landing%20page/you_are_not_alone.svg'
    },
    {
      id: '2',
      title: 'Post 2',
      description: 'Description 2',
      image: 'https://apoioecocrise.vercel.app/assets/images/landing%20page/you_are_not_alone.svg'
    },
    {
      id: '3',
      title: 'Post 3',
      description: 'Description 3',
      image: 'https://apoioecocrise.vercel.app/assets/images/landing%20page/you_are_not_alone.svg'
    },
    {
      id: '4',
      title: 'Post 4',
      description: 'Description 4',
      image: 'https://apoioecocrise.vercel.app/assets/images/landing%20page/you_are_not_alone.svg'
    }
  ];

  constructor() {}

  ngAfterViewInit() {

  }

}
