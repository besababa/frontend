
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsTableComponent } from './friends-table.component';

describe('FriendsTableComponent', () => {
  let component: FriendsTableComponent;
  let fixture: ComponentFixture<FriendsTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
