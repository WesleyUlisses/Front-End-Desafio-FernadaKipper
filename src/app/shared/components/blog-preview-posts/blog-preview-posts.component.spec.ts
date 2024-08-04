import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPreviewPostsComponent } from './blog-preview-posts.component';

describe('BlogPreviewPostsComponent', () => {
  let component: BlogPreviewPostsComponent;
  let fixture: ComponentFixture<BlogPreviewPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPreviewPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogPreviewPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
