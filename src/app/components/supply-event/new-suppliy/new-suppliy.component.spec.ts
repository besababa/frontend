import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSuppliyComponent } from './new-suppliy.component';

describe('NewSuppliyComponent', () => {
  let component: NewSuppliyComponent;
  let fixture: ComponentFixture<NewSuppliyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSuppliyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSuppliyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
