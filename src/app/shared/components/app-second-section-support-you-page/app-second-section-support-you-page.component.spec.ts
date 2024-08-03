import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSecondSectionSupportYouPageComponent } from './app-second-section-support-you-page.component';

describe('AppSecondSectionSupportYouPageComponent', () => {
  let component: AppSecondSectionSupportYouPageComponent;
  let fixture: ComponentFixture<AppSecondSectionSupportYouPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSecondSectionSupportYouPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppSecondSectionSupportYouPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
