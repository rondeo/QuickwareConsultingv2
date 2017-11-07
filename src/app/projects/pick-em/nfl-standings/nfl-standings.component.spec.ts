import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NflStandingsComponent } from './nfl-standings.component';

describe('NflStandingsComponent', () => {
  let component: NflStandingsComponent;
  let fixture: ComponentFixture<NflStandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NflStandingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NflStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
