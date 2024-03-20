import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredPollComponent } from './expired-poll.component';

describe('ExpiredPollComponent', () => {
  let component: ExpiredPollComponent;
  let fixture: ComponentFixture<ExpiredPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpiredPollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpiredPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
