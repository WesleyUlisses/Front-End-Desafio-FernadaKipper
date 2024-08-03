import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeAVolunteerModalComponent } from './be-a-volunteer-modal.component';

describe('BeAVolunteerModalComponent', () => {
  let component: BeAVolunteerModalComponent;
  let fixture: ComponentFixture<BeAVolunteerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeAVolunteerModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeAVolunteerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
