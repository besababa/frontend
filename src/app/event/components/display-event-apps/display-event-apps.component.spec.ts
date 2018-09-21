import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEventAppsComponent } from './display-event-apps.component';

describe('DisplayEventAppsComponent', () => {
  let component: DisplayEventAppsComponent;
  let fixture: ComponentFixture<DisplayEventAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayEventAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEventAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
