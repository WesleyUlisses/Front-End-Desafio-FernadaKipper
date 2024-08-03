import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFifthSectionLandingPageComponent } from './app-fifth-section-landing-page.component';

describe('AppFifthSectionLandingPageComponent', () => {
  let component: AppFifthSectionLandingPageComponent;
  let fixture: ComponentFixture<AppFifthSectionLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFifthSectionLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppFifthSectionLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
