import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderLandingPageComponent } from './app-header-landing-page.component';

describe('AppHeaderLandingPageComponent', () => {
  let component: AppHeaderLandingPageComponent;
  let fixture: ComponentFixture<AppHeaderLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeaderLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppHeaderLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
