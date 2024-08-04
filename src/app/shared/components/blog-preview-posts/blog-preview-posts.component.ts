import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-preview-posts',
  standalone: true,
  imports: [ CommonModule ],
  providers: [ Router ],
  templateUrl: './blog-preview-posts.component.html',
  styleUrl: './blog-preview-posts.component.css'
})
export class BlogPreviewPostsComponent implements OnInit {
  
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';

  constructor(private route: Router) {}

  ngOnInit(): void {}


  goToPost(id: string) {
    this.route.navigate([`/blog/post/${id}`]);
  }

}
