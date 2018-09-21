import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleEventComponent } from './title-event.component';

describe('TitleEventComponent', () => {
  let component: TitleEventComponent;
  let fixture: ComponentFixture<TitleEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
