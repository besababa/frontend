import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendRolesComponent } from './friend-roles.component';

describe('FriendRolesComponent', () => {
  let component: FriendRolesComponent;
  let fixture: ComponentFixture<FriendRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
