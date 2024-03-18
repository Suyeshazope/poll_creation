import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingPollComponent } from './voting-poll.component';

describe('VotingPollComponent', () => {
  let component: VotingPollComponent;
  let fixture: ComponentFixture<VotingPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotingPollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VotingPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
