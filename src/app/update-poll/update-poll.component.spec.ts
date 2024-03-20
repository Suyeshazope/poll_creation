import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePollComponent } from './update-poll.component';

describe('UpdatePollComponent', () => {
  let component: UpdatePollComponent;
  let fixture: ComponentFixture<UpdatePollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
