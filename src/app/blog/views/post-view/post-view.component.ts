import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderLandingPageComponent } from '../../../shared/components/app-header-landing-page/app-header-landing-page.component';
import { AppFooterLandingPageComponent } from '../../../shared/components/app-footer-landing-page/app-footer-landing-page.component';
import { BlogViewPostContainerComponent } from '../../../blog/components/blog-view-post-container/blog-view-post-container.component';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [
    CommonModule,
    AppHeaderLandingPageComponent,
    AppFooterLandingPageComponent,
    BlogViewPostContainerComponent
  ],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css'
})
export class PostViewComponent {

  constructor() {}
  
  post = {
    id: '1',
    title: 'Post 1',
    description: 'Description 1',
    image: 'https://apoioecocrise.vercel.app/assets/images/landing%20page/you_are_not_alone.svg'
  };
}
