import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollTypeOptionComponent } from './poll-type-option.component';

describe('PollTypeOptionComponent', () => {
  let component: PollTypeOptionComponent;
  let fixture: ComponentFixture<PollTypeOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollTypeOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PollTypeOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
