import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickEmComponent } from './pick-em.component';

describe('PickEmComponent', () => {
  let component: PickEmComponent;
  let fixture: ComponentFixture<PickEmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickEmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
