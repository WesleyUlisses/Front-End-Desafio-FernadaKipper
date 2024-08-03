import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFirstSectionLandingPageComponent } from './app-first-section-landing-page.component';

describe('AppFirstSectionLandingPageComponent', () => {
  let component: AppFirstSectionLandingPageComponent;
  let fixture: ComponentFixture<AppFirstSectionLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFirstSectionLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppFirstSectionLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
