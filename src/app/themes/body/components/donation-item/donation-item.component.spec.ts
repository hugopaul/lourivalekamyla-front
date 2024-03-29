import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationItemComponent } from './donation-item.component';

describe('DonationItemComponent', () => {
  let component: DonationItemComponent;
  let fixture: ComponentFixture<DonationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
