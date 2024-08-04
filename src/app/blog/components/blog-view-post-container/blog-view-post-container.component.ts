import { Component, Input, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../services/blog-service/blog.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { ToastrNotificationService } from '../../../user-portal/services/toastr/toastr.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-blog-view-post-container',
  standalone: true,
  imports: [ CommonModule ],
  providers: [ BlogService ],
  templateUrl: './blog-view-post-container.component.html',
  styleUrl: './blog-view-post-container.component.css'
})
export class BlogViewPostContainerComponent implements OnInit {

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  currentUrl: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private blogService : BlogService, private clipboard: Clipboard, private toastr: ToastrNotificationService) { }

  async ngOnInit() {

    await this.getPost();

  }

  async getPost() {
    
    this.blogService.getPostById(this.id).subscribe((post) => {
      this.title = post.title;
      this.description = post.description;
      this.image = post.image;
    });

  }

  coppyUrlToShare() {

    const url = `${environment.frontendUrl}/blog/post/:${this.id}`;
    this.clipboard.copy(url);

    this.toastr.showSuccess('Link copiado com sucesso', 'Success');
  }

}
