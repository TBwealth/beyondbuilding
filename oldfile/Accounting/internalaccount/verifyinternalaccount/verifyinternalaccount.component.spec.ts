import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyinternalaccountComponent } from './verifyinternalaccount.component';

describe('VerifyinternalaccountComponent', () => {
  let component: VerifyinternalaccountComponent;
  let fixture: ComponentFixture<VerifyinternalaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyinternalaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyinternalaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
