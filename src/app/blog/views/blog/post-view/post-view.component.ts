import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderLandingPageComponent } from '../../../../shared/components/app-header-landing-page/app-header-landing-page.component';
import { AppFooterLandingPageComponent } from '../../../../shared/components/app-footer-landing-page/app-footer-landing-page.component';
@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [
    CommonModule,
    AppHeaderLandingPageComponent,
    AppFooterLandingPageComponent
  ],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css'
})
export class PostViewComponent {

}
