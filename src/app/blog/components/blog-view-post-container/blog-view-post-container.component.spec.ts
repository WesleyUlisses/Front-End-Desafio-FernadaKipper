import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogViewPostContainerComponent } from './blog-view-post-container.component';

describe('BlogViewPostContainerComponent', () => {
  let component: BlogViewPostContainerComponent;
  let fixture: ComponentFixture<BlogViewPostContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogViewPostContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogViewPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
