import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowYouFeelsSectionComponent } from './how-you-feels-section.component';

describe('HowYouFeelsSectionComponent', () => {
  let component: HowYouFeelsSectionComponent;
  let fixture: ComponentFixture<HowYouFeelsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowYouFeelsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowYouFeelsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
