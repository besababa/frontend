import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyEventComponent } from './supply-event.component';

describe('SupplyEventComponent', () => {
  let component: SupplyEventComponent;
  let fixture: ComponentFixture<SupplyEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
