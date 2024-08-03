import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveADonationModalComponent } from './give-a-donation-modal.component';

describe('GiveADonationModalComponent', () => {
  let component: GiveADonationModalComponent;
  let fixture: ComponentFixture<GiveADonationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiveADonationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiveADonationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
