import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinternalaccountComponent } from './viewinternalaccount.component';

describe('ViewinternalaccountComponent', () => {
  let component: ViewinternalaccountComponent;
  let fixture: ComponentFixture<ViewinternalaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewinternalaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinternalaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
