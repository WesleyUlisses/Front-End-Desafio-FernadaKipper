import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderLandingPageComponent } from '../../../shared/components/app-header-landing-page/app-header-landing-page.component';
import { AppFooterLandingPageComponent } from '../../../shared/components/app-footer-landing-page/app-footer-landing-page.component';
import { BlogPreviewContainerComponent } from '../../../shared/components/blog-preview-container/blog-preview-container.component';
import { AppJoinUsSectionComponent } from '../../../shared/components/app-join-us-section/app-join-us-section.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    AppHeaderLandingPageComponent,
    AppFooterLandingPageComponent,
    BlogPreviewContainerComponent,
    AppJoinUsSectionComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  
    constructor() {}
}
