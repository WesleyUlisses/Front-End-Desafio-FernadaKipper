import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOnAlertServicesModalComponent } from './register-on-alert-services-modal.component';

describe('RegisterOnAlertServicesModalComponent', () => {
  let component: RegisterOnAlertServicesModalComponent;
  let fixture: ComponentFixture<RegisterOnAlertServicesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterOnAlertServicesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterOnAlertServicesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
