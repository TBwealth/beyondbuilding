import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinternalaccountComponent } from './newinternalaccount.component';

describe('NewinternalaccountComponent', () => {
  let component: NewinternalaccountComponent;
  let fixture: ComponentFixture<NewinternalaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewinternalaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinternalaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
