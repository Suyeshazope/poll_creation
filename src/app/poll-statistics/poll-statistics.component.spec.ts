import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollStatisticsComponent } from './poll-statistics.component';

describe('PollStatisticsComponent', () => {
  let component: PollStatisticsComponent;
  let fixture: ComponentFixture<PollStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PollStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
