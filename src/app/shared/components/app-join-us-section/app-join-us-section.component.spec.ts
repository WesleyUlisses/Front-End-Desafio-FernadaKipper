import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppJoinUsSectionComponent } from './app-join-us-section.component';

describe('AppJoinUsSectionComponent', () => {
  let component: AppJoinUsSectionComponent;
  let fixture: ComponentFixture<AppJoinUsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppJoinUsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppJoinUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
