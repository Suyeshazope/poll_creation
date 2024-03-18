import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePollComponent } from './available-poll.component';

describe('AvailablePollComponent', () => {
  let component: AvailablePollComponent;
  let fixture: ComponentFixture<AvailablePollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailablePollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailablePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
