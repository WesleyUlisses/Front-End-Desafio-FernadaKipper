import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportYouPageComponent } from './support-you-page.component';

describe('SupportYouPageComponent', () => {
  let component: SupportYouPageComponent;
  let fixture: ComponentFixture<SupportYouPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportYouPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportYouPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
