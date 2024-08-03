import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSecondSectionLandingPageComponent } from './app-second-section-landing-page.component';

describe('AppSecondSectionLandingPageComponent', () => {
  let component: AppSecondSectionLandingPageComponent;
  let fixture: ComponentFixture<AppSecondSectionLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSecondSectionLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppSecondSectionLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
