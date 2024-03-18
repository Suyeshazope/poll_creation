import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreatedPollsComponent } from './user-created-polls.component';

describe('UserCreatedPollsComponent', () => {
  let component: UserCreatedPollsComponent;
  let fixture: ComponentFixture<UserCreatedPollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCreatedPollsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCreatedPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
