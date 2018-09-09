import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountinquireComponent } from './accountinquire.component';

describe('AccountinquireComponent', () => {
  let component: AccountinquireComponent;
  let fixture: ComponentFixture<AccountinquireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountinquireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountinquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
