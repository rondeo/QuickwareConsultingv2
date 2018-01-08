import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStandingsComponent } from './user-standings.component';

describe('UserStandingsComponent', () => {
  let component: UserStandingsComponent;
  let fixture: ComponentFixture<UserStandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStandingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
