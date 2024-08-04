import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPreviewContainerComponent } from './blog-preview-container.component';

describe('BlogPreviewContainerComponent', () => {
  let component: BlogPreviewContainerComponent;
  let fixture: ComponentFixture<BlogPreviewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPreviewContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogPreviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
