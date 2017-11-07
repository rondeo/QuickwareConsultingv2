import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoCollectionComponent } from './funko-collection.component';

describe('FunkoCollectionComponent', () => {
  let component: FunkoCollectionComponent;
  let fixture: ComponentFixture<FunkoCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunkoCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkoCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
