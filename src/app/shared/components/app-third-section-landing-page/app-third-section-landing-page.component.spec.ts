import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppThirdSectionLandingPageComponent } from './app-third-section-landing-page.component';

describe('AppThirdSectionLandingPageComponent', () => {
  let component: AppThirdSectionLandingPageComponent;
  let fixture: ComponentFixture<AppThirdSectionLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppThirdSectionLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppThirdSectionLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
