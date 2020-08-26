import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionIndicatorComponent } from './action-indicator.component';

describe('ActionIndicatorComponent', () => {
  let component: ActionIndicatorComponent;
  let fixture: ComponentFixture<ActionIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
