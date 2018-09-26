import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFreindsComponent } from 'event/components/event-friends/event-freinds.component';

describe('EventFreindsComponent', () => {
  let component: EventFreindsComponent;
  let fixture: ComponentFixture<EventFreindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFreindsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFreindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
