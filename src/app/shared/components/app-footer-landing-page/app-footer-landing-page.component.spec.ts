import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFooterLandingPageComponent } from './app-footer-landing-page.component';

describe('AppFooterLandingPageComponent', () => {
  let component: AppFooterLandingPageComponent;
  let fixture: ComponentFixture<AppFooterLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFooterLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppFooterLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
